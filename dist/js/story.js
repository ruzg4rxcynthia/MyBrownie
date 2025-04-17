// Update the engine to handle multiple file formats
export const SUPPORTED_IMAGE_FORMATS = ['.png', '.jpg', '.jpeg', '.webp'];
export const SUPPORTED_AUDIO_FORMATS = ['.mp3', '.wav', '.ogg'];
// Helper function to check browser audio format support
export function getSupportedAudioFormat() {
    const audio = new Audio();
    if (audio.canPlayType('audio/ogg'))
        return '.ogg';
    if (audio.canPlayType('audio/wav'))
        return '.wav';
    return '.mp3'; // fallback
}
// Default story with flexible file formats
export const story = {
    characters: {
        narrator: {
            name: "Narrator",
            images: {}
        },
        me: {
            name: "Me",
            images: {}
        },
        sofi: {
            name: "Sofi",
            images: {}
        },
        cyn: {
            name: "Cyn",
            images: {}
        }
    },
    chapters: [
        {
            title: "Our Chat",
            scenes: {
                start: {
                    background: "placeholder/cynfpic.png",
                    music: `audio/bg2.mp3`,
                    characters: {},
                    
                    dialogue: [
                        {
                            speaker: "",
                            text: "as sofi takes in the girl's beauty, a smile creeps onto his face—he can hardly believe what he's seeing..",
                        },
                        {
                            speaker: "",
                            text: "Sofi sees the beauty for the first time in forever. He encourages himself and jokes that they should get married — somehow, they start talking.",
                            background: "placeholder/ruzgar1.jpg"
                        },
                        {
                            speaker: "sofi",
                            text: "*sofi speaks with the princess for the first time in forever. *\nhello!",
                            background: "placeholder/firstmsg.png"
                        },
                        {
                            speaker: "cyn",
                            text: "hey!!",
                            background: "placeholder/firstmsg.png"
                        },
                        {
                            speaker: "sofi",
                            text: "*sofi feels anxious — his heartbeat through the roof, hands trembling as he types.*\nhow are you doing^^",
                            background: "placeholder/ruzgar1.jpg"
                        },
                        {
                            speaker: "cyn",
                            text: "i'm doing great\nwbu??",
                            background: "placeholder/cyn2.jpg"
                        },
                        {
                            speaker: "sofi",
                            text: "im doing good thanks, i am happy to hear u doin great i hope u always be great^^",
                            background: "placeholder/ruz0.jpg"
                        },
                        {
                            speaker: "",
                            text: "A heart reaction. Just a simple emoji. But to him? It was a love letter. He practically launched into orbit — jumping, grinning, losing his mind over a pixelated heart. It probably meant nothing… but it felt like everything to him.",
                            background: "placeholder/heartemojreact.png"
                        },
                        {
                            speaker: "",
                            text: "With every message, they got to know each other more. They shared favorites, stories, and dreams. Sometimes, they’d say the same thing at the same time, slowly realizing they have interests in similar things. — like their hearts were synced.",
                            background: "placeholder/pfp2.jpg"
                        },
                        {
                            speaker: "",
                            text: "Three days passed. Each day, their conversations grew deeper — a little more laughter, a little more trust. They were getting closer in ways they couldn’t explain. But no matter how much they cared… the distance never really left. Not yet. They were getting closer, yet they were still so far.",
                            background: "placeholder/sofidraw1.jpg"
                        },
                        {
                            speaker: "",
                            text: "Three days later, they were feeling safer with eachother. They were still shy and anxious",
                            background: "placeholder/CynMyLove.png"
                        },
                        {
                            speaker: "",
                            text: "While Cyn was chatting with her friend in a hospital room, sofi was miles away, half-drunk, playing Resident Evil like a man on a mission. He wanted to clear space for the one she asked him to try — Fortnite. He hated it. But he’d still do it. Because she mattered. He would do anything to play with her, even deleting his favorite games to clear up some space.",                       
                            background: "placeholder/fortnite.png"
                        },
                        {
                            speaker: "",
                            text: "Because this offer to him was so special, she wanted to do something, together. He definitely was not gonna miss this one opportunity. He was excited.",                       
                            background: "placeholder/4month.png"
                        },
                        {
                            speaker: "sofi",
                            text: '*He was still drunk. It was definitely not the best time to ask but he made the luckiest and best drunk-choice he ever made.*\n\n"EILL YOU BE MY GRKXLRIEND?"',                       
                            background: "placeholder/bemygf.png"
                        },
                        {
                            speaker: "",
                            text: "He sent the message. Threw the phone away. And the most stressed 3 minutes of his life has been started. He was desperately waiting for a 'yes'.",
                            background: "placeholder/bemygf.png"
                        },
                        {
                            speaker: "cyn",
                            text: "*She thought it was a tiny early but she said yes. She seemed like she didn't mind the weirdness of him. She was special.*\n\nYES, LET'S SEE HOW IT GOES",                       
                            background: "placeholder/YES.png"
                        },
                        {
                            speaker: "",
                            text: "Suddenly, his most-stressed-3-minutes of his life was over and he was the happiest person alive, feeling also the luckiest guy ever. He has never tested such happiness before.",                       
                            background: "placeholder/finnflame.png"
                        },
                        {
                            speaker: "",
                            text: "He stood up, screamed 'FUCK YES!', and accidentaly drop the beer. Of course, he wasn't gonna tell her about this.\n\nHe was happy.",                       
                            background: "placeholder/sofidraw0.jpg"
                        },
                        {
                            speaker: "",
                            text: "He was only wanting one thing. To keep her happy. It was the only thing he ever wanted. Her happiness was everything. She was his everything from that moment. He would never want to lose her. ",                       
                            background: "placeholder/pfp3.png"
                        },
                        {
                            speaker: "",
                            text: "He finally found the meaning of his life.",                       
                            background: "placeholder/pfp4.png"
                        },
                        {
                            speaker: "",
                            text: "It had only been a month, but to him, it felt like the best one he’d ever lived — falling asleep on calls, little chats into the night, asking questions, sharing quiet laughs, and slowly realizing that even with everything they already knew about each other, there was always more to discover.",                       
                            background: "placeholder/pfp5.png"
                        },
                        {
                            speaker: "cyn",
                            text: "*cyn was about to give the best surprise to sofi he ever had. A surprise that's gonna make him put into tears.*\n\nHAPPY ONE MONTH MY LOVE, I LOVE YOU SO MUCH",                       
                            background: "placeholder/cynmsgm1.png"
                        },
                        {
                            speaker: "",
                            text: "sofi was so surprised, shocked and happy, he couldnt hold his tears back. It was the best thing he ever got.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "sofi",
                            text: "*He was so lucky to have such a talented girlfriend. It was so beautiful. He wasn't as talented tho.*\nhey babe look at this!: https://ruzg4rxcynthia.github.io/CynthiaMyLove/ \n*A simple website, it was the only thing he did, he felt embrassed. But memories were safe there, forever.*",                       
                            background: "placeholder/website1.png"
                        },
                        {
                            speaker: "",
                            text: "...",                       
                            background: "placeholder/total-darkness.jpg"
                        },
                        {
                            speaker: "",
                            text: "One month, two, then three… five, six. Time was passing so fast when they were together. They always had to count down to meet, but time never was trying to catch up.",                       
                            background: "placeholder/total-darkness.jpg"
                        },
                        {
                            speaker: "",
                            text: "It was like universe was really hating on them.",                       
                            background: "placeholder/total-darkness.jpg"
                        },
                        {
                            speaker: "",
                            text: "But they were in love.",                       
                            background: "video/anniversaryvideo.mp4"
                        },
                        {
                            speaker: "",
                            text: "Months has passed. Cute little arguments to big fights.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "Happiness.",                       
                            background: "placeholder/flower.png"
                        },
                        {
                            speaker: "",
                            text: "Sadness.",                       
                            background: "placeholder/akira.png"
                        },
                        {
                            speaker: "",
                            text: "Calmness.",                       
                            background: "placeholder/calmness.jpg"
                        },
                        {
                            speaker: "",
                            text: "Anger.",                       
                            background: "placeholder/total-darkness.jpg"
                        },
                        {
                            speaker: "",
                            text: "Joy.",                       
                            background: "placeholder/pfp6.jpg"
                        },
                        {
                            speaker: "",
                            text: "Grief.",                       
                            background: "placeholder/grief.jpg"
                        },
                        {
                            speaker: "",
                            text: "Hope.",                       
                            background: "placeholder/hope.jpg"
                        },
                        {
                            speaker: "",
                            text: "Despair.",                       
                            background: "placeholder/despair.jpg"
                        },
                        {
                            speaker: "",
                            text: "Peace.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "Chaos.",                       
                            background: "placeholder/chqow.jpg"
                        },
                        {
                            speaker: "",
                            text: "They felt it all. They went through them so many times. But their love never disappeared.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "They were still together after all of it. They were so in love.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "They have proven their love is stronger than all the things that's happening to them.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "Two people.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "one boy. luckiest one.",                       
                            background: "placeholder/ruzorg.jpg"
                        },
                        {
                            speaker: "",
                            text: "one girl. most beautiful of them all.",                       
                            background: "placeholder/cynorg.jpg"
                        },
                        {
                            speaker: "",
                            text: "Two people broken by world, decided to fight against it, together.",                       
                            background: "placeholder/pfp7.jpg"
                        },
                        {
                            speaker: "",
                            text: "It was only them two. Just them, against the world.",                       
                            background: "placeholder/menuagainstworld.png"
                        },
                        {
                            speaker: "",
                            text: "Not only against the world, also against the universe.\nBecause it was clear universe hated them.",                       
                            background: "placeholder/menuagainstuni.png"
                        },
                        {
                            speaker: "",
                            text: "They were stronger than that.",                       
                            background: "placeholder/strongerthanu.png"
                        },
                        {
                            speaker: "",
                            text: "As long as they had eachother, nothing would break them.",                       
                            background: "placeholder/total-darkness.jpg"
                        },
                        {
                            speaker: "",
                            text: "They were filled with Determination.",                       
                            background: "placeholder/determination.jpg"
                        },
                        {
                            speaker: "",
                            text: "They had wounds when they got strike, but they were always together to heal.",                       
                            background: "placeholder/total-darkness.jpg"
                        },
                        {
                            speaker: "",
                            text: "They did not succumb.",                       
                            background: "placeholder/omori.png"
                        },
                        {
                            speaker: "",
                            text: "A beautiful girl like her was so wrecked by life deserved safe arms which would keep her safe.\nShe deseved everything.",                       
                            background: "cyn/cyn01.jpg"
                        },
                        {
                            speaker: "",
                            text: "She was the kind of beauty the world should’ve protected, yet it tore her apart instead.",                       
                            background: "cyn/cyn02.jpg"
                        },
                        {
                            speaker: "",
                            text: "He knew she was going through so much.\n But she was smiling like she wasn’t carrying the weight of a thousand things no one ever bothered to ask about.",                       
                            background: "cyn/cyn03.jpg"
                        },
                        {
                            speaker: "",
                            text: "She thought being enough meant being perfect. No one ever told her she was already enough just by being herself. But she was perfect.",                       
                            background: "cyn/cyn04.jpg"
                        },
                        {
                            speaker: "sofi",
                            text: "*You keep pretending you're fine, like it’s second nature… but I see the cracks in your smile. I see how tired your eyes are when no one's looking.* sofi said.\nNo. He didn't say that. He couldn't find the words to choose so he stood silent.",                       
                            background: "cyn/cyn05.jpg"
                        },
                        {
                            speaker: "sofi",
                            text: "She was never meant to be this broken. She was meant to be protected, to be held. Not thrown into a world that only knows how to take and never give.",                       
                            background: "cyn/cyn06.jpg"
                        },
                        {
                            speaker: "sofi",
                            text: "He promised himself every second. Told himself: \n 'And maybe no one ever stayed long enough to see you fall apart. But I’m not looking away. Not now. Not ever.'",                       
                            background: "cyn/cyn07.jpg"
                        },
                        {
                            speaker: "",
                            text: "She never asked for pity. Never needed anyone to fix her. But god, she was tired. Tired of pretending her heart hadn’t been broken in ways she couldn't explain. Tired of smiling like she wasn’t carrying pieces of herself she no longer knew how to put back together.",                       
                            background: "cyn/cyn08.jpg"
                        },
                        {
                            speaker: "",
                            text: "Everyone thought she was strong because she never fell apart where they could see. But no one ever stayed long enough to notice how she disappeared quietly, bit by bit.\nHe didn’t look at her like she was a tragedy. He looked at her like someone who deserved to be whole.",                       
                            background: "cyn/cyn09.jpg"
                        },
                        {
                            speaker: "cyn",
                            text: "*She had that thoughts, unable to love herself*\nShe was always “too” something. Too emotional. Too sensitive. Too quiet. Too much to handle, and somehow never enough to keep.",                       
                            background: "cyn/cyn10.jpg"
                        },
                        {
                            speaker: "cyn",
                            text: "And over time, she started believing it. That maybe she really was too difficult to love. Too messy to care for. Too broken to choose.",                       
                            background: "cyn/cyn11.jpg"
                        },
                        {
                            speaker: "",
                            text: "But he never asked her to change. He didn’t flinch at the chaos. He didn’t walk away when she unraveled. He just stayed—soft and steady—like he was telling her, without words: You are not too much. You are exactly enough.",                       
                            background: "cyn/cyn12.jpg"
                        },
                        {
                            speaker: "",
                            text: "She needed someone, not to rescue her, not to fix her—but just to say, “I see you. I see how hard it’s been. And I’m not going anywhere. And he was happy to the be the one.”",                       
                            background: "cyn/cyn13.jpg"
                        },
                        {
                            speaker: "",
                            text: "It was just not her. Seeing her happy was making him the happiest person alive everytime, like a flower is blooming, his eyes was start shining when he hear her laugh. She was perfect as she is.",                       
                            background: "cyn/cyn14.jpg"
                        },
                        {
                            speaker: "",
                            text: "She saw her when he was alone. She treated him so good.",                       
                            background: "cyn/cyn16.jpg"
                        },
                        {
                            speaker: "",
                            text: "She taught him love.",                       
                            background: "cyn/cyn15.jpg"
                        },
                        {
                            speaker: "",
                            text: "She taught him how to love..",                       
                            background: "cyn/cyn17.jpg"
                        },
                        {
                            speaker: "",
                            text: "She showed him how it is to be loved.",                       
                            background: "cyn/cyn18.jpg"
                        },
                        {
                            speaker: "",
                            text: "She was everything he wanted, and needed.",                       
                            background: "cyn/cyn19.jpg"
                        },
                        {
                            speaker: "",
                            text: "he only wanted her in this disgusting world.",                       
                            background: "cyn/cyn20.jpg"
                        },
                        {
                            speaker: "",
                            text: "Months passed. 7, 8, 9, 10, 11 months.",                       
                            background: "placeholder/total-darkness.jpg"
                        },
                        {
                            speaker: "",
                            text: "More months. more fights. But they were never seperated.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "Even if they were mad, they were still loving eachother.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "Their love only gotten bigger and bigger.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "12 months. 1 Year.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "They entered their first year. It was just the beginning of so many years. They were created eachother.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "They were burning with the hope of seeing eachother one day.",                       
                            background: "placeholder/CYN1monthIMG.png"
                        },
                        {
                            speaker: "",
                            text: "At their first year, Cyn had another perfect gift for him, just like her existence wasn't a enough gift for him.",                       
                            background: "placeholder/cynFIN.jpg"
                        },
                        {
                            speaker: "",
                            text: "It was so beautiful.",                       
                            background: "placeholder/cynFIN.jpg"
                        },
                        {
                            speaker: "",
                            text: "He loved it so much. so so much. He could only look at it all day when she was working.",                       
                            background: "placeholder/cynFIN.jpg"
                        },
                        {
                            speaker: "",
                            text: "They didn't know what kinda surprises future has for them.",                       
                            background: "placeholder/cynFIN.jpg"
                        },
                        {
                            speaker: "",
                            text: "But they knew, as long as they were together, they would be okay.",                       
                            background: "placeholder/cynFIN.jpg"
                        },
                        {
                            speaker: "",
                            text: "Their fate was about to be determined.",                       
                           background: "placeholder/cynFIN.jpg"
                        },
                    ]
                }
            }
        }
    ]
};
