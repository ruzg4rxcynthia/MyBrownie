var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { story } from './story.js';
class VisualNovelEngine {
    constructor() {
        this.currentChapter = 0;
        this.currentScene = 'start';
        this.currentDialogue = 0;
        this.isAutoPlaying = false;
        this.typingSpeed = 50;
        this.isSkipping = false;
        this.isTyping = false;
        this.currentTimeout = null;
        this.skipMode = false;
        this.skipDelay = 50;
        this.shouldCancelTyping = false;
        this.videoVolume = 1.0;
        this.bgmVolume = 1.0;
        
        this.elements = {
            background: document.getElementById('background'),
            videoBackground: document.getElementById('video-background'),
            characters: document.getElementById('characters'),
            speaker: document.getElementById('speaker'),
            text: document.getElementById('text'),
            choices: document.getElementById('choices'),
            continueIndicator: document.getElementById('continue-indicator'),
            auto: document.getElementById('auto'),
            skip: document.getElementById('skip'),
            volumeControl: null
        };

        this.audio = {
            bgm: new Audio(),
            sfx: new Audio()

        };

        // Create video element if it doesn't exist
        if (!this.elements.videoBackground) {
            const video = document.createElement('video');
            video.id = 'video-background';
            video.style.position = 'absolute';
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'contain';
            video.style.top = '0';
            video.style.left = '0';
            video.style.zIndex = '-1';
            video.playsInline = true;
            video.muted = false;
            video.volume = this.videoVolume;
            video.loop = true;
            this.elements.background.parentElement.insertBefore(video, this.elements.background);
            this.elements.videoBackground = video;
        }

        // Create volume control
        this.createVolumeControl();

        console.log('Visual Novel Engine starting...');
        console.log('Story:', story);
        this.initializeEventListeners();
        this.startGame();
    }
    initializeEventListeners() {
        document.addEventListener('click', async () => {
            if (this.skipMode) {
                this.skipMode = false;
            }
            else if (this.isTyping) {
                // Cancel current typing and show full text immediately
                this.shouldCancelTyping = true;
                if (this.currentTimeout) {
                    clearTimeout(this.currentTimeout);
                    this.currentTimeout = null;
                }
                const dialogueData = story.chapters[this.currentChapter]
                    .scenes[this.currentScene]
                    .dialogue[this.currentDialogue];
                
                this.elements.text.innerHTML = dialogueData.text.replace(/\n/g, '<br>');
                this.isTyping = false;
                this.shouldCancelTyping = false;
                this.currentDialogue++; // Move to next dialogue when text is completed
            }
            else {
                const currentChapterData = story.chapters[this.currentChapter];
                const currentSceneData = currentChapterData.scenes[this.currentScene];
                
                // Only proceed if there's more dialogue
                if (this.currentDialogue < currentSceneData.dialogue.length) {
                    await this.proceed();
                }
            }
        });
        this.elements.auto.addEventListener('click', () => this.toggleAutoPlay());
        this.elements.skip.addEventListener('click', () => this.skipScene());
    }
    async typeText(text) {
        // Immediately clear any existing text and cancel ongoing operations
        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
            this.currentTimeout = null;
        }
        
        this.shouldCancelTyping = false;
        
        // Reset states
        this.isTyping = true;
        
        // Clear the text element before starting
        const textElement = this.elements.text;
        textElement.innerHTML = '';
        
        // If in skip mode, show text instantly and return
        if (this.skipMode) {
            textElement.innerHTML = text.replace(/\n/g, '<br>');
            this.isTyping = false;
            return;
        }

        return new Promise((resolve) => {
            const lines = text.split('\n');
            let currentLine = 0;
            let currentChar = 0;
            
            const displayText = () => {
                if (this.shouldCancelTyping || this.skipMode) {
                    textElement.innerHTML = text.replace(/\n/g, '<br>');
                    this.isTyping = false;
                    this.shouldCancelTyping = false;
                    resolve();
                    return;
                }

                if (currentLine < lines.length) {
                    const line = lines[currentLine];
                    if (currentChar === 0 && currentLine > 0) {
                        textElement.innerHTML += '<br>';
                    }
                    
                    if (currentChar < line.length) {
                        textElement.innerHTML += line[currentChar];
                        currentChar++;
                        this.currentTimeout = window.setTimeout(displayText, this.typingSpeed);
                    } else {
                        currentLine++;
                        currentChar = 0;
                        if (currentLine < lines.length) {
                            this.currentTimeout = window.setTimeout(displayText, this.typingSpeed);
                        } else {
                            this.isTyping = false;
                            resolve();
                        }
                    }
                }
            };

            displayText();
        });
    }
    async determineBackgroundSize(imageUrl) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const imageRatio = img.width / img.height;
                const screenRatio = this.screenWidth / this.screenHeight;
                
                // If image is larger than screen in either dimension
                if (img.width > this.screenWidth || img.height > this.screenHeight) {
                    resolve('cover');
                } else {
                    resolve('contain');
                }
            };
            img.onerror = () => resolve('contain'); // Default to contain if there's an error
            img.src = imageUrl;
        });
    }
    async updateBackgroundWithSize(imageUrl) {
        const size = await this.determineBackgroundSize(imageUrl);
        this.elements.background.style.backgroundImage = `url(${imageUrl})`;
        this.elements.background.style.backgroundSize = size;
        this.elements.background.style.backgroundPosition = 'center';
        this.elements.background.style.backgroundRepeat = 'no-repeat';
    }
    updateCurrentBackground() {
        const currentScene = story.chapters[this.currentChapter].scenes[this.currentScene];
        const currentDialogue = currentScene.dialogue[this.currentDialogue];
        const backgroundUrl = currentDialogue?.background || currentScene.background;
        if (backgroundUrl) {
            this.updateBackgroundWithSize(backgroundUrl);
        }
    }
    updateBackground(source) {
        // Check if it's a video (ends with .mp4, .webm, etc.)
        const isVideo = /\.(mp4|webm|ogg)$/i.test(source);
        
        if (isVideo) {
            // If BGM is playing, pause it during video
            if (this.audio.bgm.src) {
                this.audio.bgm.pause();
            }

            // Hide image background, show video and volume control
            this.elements.background.style.display = 'none';
            this.elements.videoBackground.style.display = 'block';
            this.elements.volumeControl.style.display = 'block';
            
            this.elements.videoBackground.src = source;
            this.elements.videoBackground.volume = this.videoVolume;
            this.elements.videoBackground.play().catch(err => console.log('Video autoplay failed:', err));

            // Resume BGM when video ends if it was playing
            this.elements.videoBackground.onended = () => {
                if (this.audio.bgm.src) {
                    this.audio.bgm.play();
                }
            };
        } else {
            // Hide video and volume control, show image background
            if (this.elements.videoBackground.src) {
                this.elements.videoBackground.pause();
                this.elements.videoBackground.src = '';
                // Resume BGM if it was playing
                if (this.audio.bgm.src) {
                    this.audio.bgm.play();
                }
            }
            this.elements.videoBackground.style.display = 'none';
            this.elements.volumeControl.style.display = 'none';
            this.elements.background.style.display = 'block';
            this.elements.background.style.backgroundImage = `url(${source})`;
            this.elements.background.style.backgroundSize = 'contain';
            this.elements.background.style.backgroundPosition = 'center';
            this.elements.background.style.backgroundRepeat = 'no-repeat';
        }
    }
    updateScene(scene) {
        // Update background
        this.updateBackground(scene.background);
        let user = false;
        // Update music if needed
        if (scene.music && this.audio.bgm.src !== scene.music) {
            this.audio.bgm.src = scene.music;
            this.audio.bgm.loop = true;
            this.audio.bgm.play();
        }

        // Update characters
        this.elements.characters.innerHTML = '';
        Object.entries(scene.characters).forEach(([char, data]) => {
            const charElement = document.createElement('div');
            charElement.className = 'character';
            charElement.style.backgroundImage = `url(${story.characters[char].images[data.image]})`;
            charElement.style.left = this.getPositionStyle(data.position);
            this.elements.characters.appendChild(charElement);
        });
    }
    getPositionStyle(position) {
        switch (position) {
            case 'left': return '20%';
            case 'center': return '50%';
            case 'right': return '80%';
            default: return '50%';
        }
    }
    showChoices(choices) {
        this.elements.choices.innerHTML = '';
        this.elements.choices.classList.remove('hidden');
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                const currentChapterData = story.chapters[this.currentChapter];
                this.currentScene = choice.nextScene;
                this.currentDialogue = 0;
                this.elements.choices.classList.add('hidden');
                this.updateScene(currentChapterData.scenes[choice.nextScene]);
            });
            this.elements.choices.appendChild(button);
        });
    }
    async proceed() {
        if (this.isTyping && !this.skipMode) return;

        const currentChapterData = story.chapters[this.currentChapter];
        const currentSceneData = currentChapterData.scenes[this.currentScene];
        
        if (this.currentDialogue >= currentSceneData.dialogue.length) {
            this.skipMode = false;
            return;
        }

        const dialogueData = currentSceneData.dialogue[this.currentDialogue];
        this.elements.speaker.textContent = dialogueData.speaker;

        // Update background if specified in dialogue
        if (dialogueData.background) {
            this.updateBackground(dialogueData.background);
        }

        // Ensure clean text display
        if (this.skipMode) {
            this.elements.text.innerHTML = dialogueData.text.replace(/\n/g, '<br>');
            this.currentDialogue++;
        }
        else {
            try {
                await this.typeText(dialogueData.text);
                if (!this.shouldCancelTyping) {
                    this.currentDialogue++;
                }
            } catch (error) {
                console.error('Error during text typing:', error);
            }
        }

        if (dialogueData.choices) {
            this.skipMode = false;
            this.showChoices(dialogueData.choices);
        }
    }
    toggleAutoPlay() {
        this.isAutoPlaying = !this.isAutoPlaying;
        if (this.isAutoPlaying) {
            this.autoPlay();
        }
    }
    autoPlay() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.isAutoPlaying) {
                yield new Promise(resolve => setTimeout(resolve, 2000));
                this.proceed();
            }
        });
    }
    skipScene() {
        if (!this.skipMode) {
            // Cancel current typing if any
            this.shouldCancelTyping = true;
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
                this.currentTimeout = null;
            }
            this.skipMode = true;
            this.isAutoPlaying = false;
            // Wait for typing to finish cleanup before starting fast forward
            Promise.resolve().then(() => this.fastForward());
        }
    }
    async fastForward() {
        while (this.skipMode) {
            const currentChapterData = story.chapters[this.currentChapter];
            const currentSceneData = currentChapterData.scenes[this.currentScene];
            
            if (this.currentDialogue >= currentSceneData.dialogue.length) {
                this.skipMode = false;
                break;
            }

            const dialogueData = currentSceneData.dialogue[this.currentDialogue];
            
            if (dialogueData.choices) {
                this.skipMode = false;
                break;
            }

            // Update background if specified in dialogue
            if (dialogueData.background) {
                this.updateBackground(dialogueData.background);
            }

            // Clean display of text during skip
            this.elements.speaker.textContent = dialogueData.speaker;
            this.elements.text.textContent = dialogueData.text;
            this.currentDialogue++;

            // Ensure proper delay between text updates
            await new Promise(resolve => setTimeout(resolve, this.skipDelay));
        }
    }
    startGame() {
        const firstScene = story.chapters[0].scenes.start;
        this.updateScene(Object.assign(Object.assign({}, firstScene), { characters: {
                girlfriend: Object.assign(Object.assign({}, firstScene.characters.girlfriend), { position: 'center' })
            } }));
        this.proceed();
    }
    // Add method to control video volume
    setVideoVolume(volume) {
        this.videoVolume = Math.max(0, Math.min(1, volume)); // Clamp between 0 and 1
        if (this.elements.videoBackground) {
            this.elements.videoBackground.volume = this.videoVolume;
        }
    }
    createPlayButton() {
        const playButton = document.createElement('button');
        playButton.textContent = '▶️ Play Music';
        playButton.style.position = 'fixed';
        playButton.style.top = '100px';
        playButton.style.right = '20px';
        playButton.style.zIndex = '1000';
        playButton.style.padding = '10px';
        playButton.style.cursor = 'pointer';
        
        playButton.addEventListener('click', () => {
            this.audio.bgm.play();
            playButton.remove();
        });
        
        document.body.appendChild(playButton);
    }
    createVolumeControl() {
        // Create volume control container
        const volumeControl = document.createElement('div');
        volumeControl.id = 'volume-control';
        volumeControl.style.position = 'fixed';
        volumeControl.style.top = '20px';
        volumeControl.style.right = '20px';
        volumeControl.style.zIndex = '1000';
        volumeControl.style.background = 'rgba(0, 0, 0, 0.7)';
        volumeControl.style.padding = '10px';
        volumeControl.style.borderRadius = '5px';
        volumeControl.style.display = 'none';

        // Create volume slider
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '100';
        slider.value = this.videoVolume * 100;
        slider.style.width = '100px';
        slider.style.marginLeft = '10px';

        // Create volume icon/label
        const label = document.createElement('span');
        label.textContent = '🔊';
        label.style.color = 'white';
        label.style.marginRight = '5px';

        // Add event listener for volume change
        slider.addEventListener('input', (e) => {
            const volume = parseInt(e.target.value) / 100;
            this.setVideoVolume(volume);
        });

        volumeControl.appendChild(label);
        volumeControl.appendChild(slider);
        document.body.appendChild(volumeControl);
        this.elements.volumeControl = volumeControl;
    }
}
// Initialize the game
new VisualNovelEngine();
