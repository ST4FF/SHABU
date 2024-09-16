const playButton = document.getElementById('playButton');
const song = document.getElementById('song');
const lyricsContainer = document.getElementById('lyrics');

function TimeToSeconds(time){
    const parts = time.split(":");
    const minutes = parseInt(parts[0]);
    const seconds = parseInt(parts[1]);
    return (minutes * 60) + seconds;
}

const lyrics = [
    //[Verse 1]
    {time: TimeToSeconds("0:04"), text: "Uh-huh"},
    {time: TimeToSeconds("0:09"), text: "Uh-huh"},
    {time: TimeToSeconds("0:14"), text: "Uh-huh"},
    {time: TimeToSeconds("0:17"), text: "Uh-huh"},
    {time: TimeToSeconds("0:21-0:22"), text: "I think I started something"},
    {time: TimeToSeconds("0:23-0:24"), text: "I got what I wanted"},
    {time: TimeToSeconds("0:25-0:28"), text: "Did-didn't I can't feel nothing, superhuman"},
    {time: TimeToSeconds("0:29-0:30"), text: "Even when I'm fuckin', viagra poppin'"},
    {time: TimeToSeconds("0:31-0:32"), text: "Every single round, autotunin'"},
    {time: TimeToSeconds("0:33-0:36"), text: "Zero emotion, muted emotion"},
    {time: TimeToSeconds("0:37-0:38"), text: "Pitch corrected, computer emotion"},
    {time: TimeToSeconds("0:39"), text: "Uh-huh"},
    {time: TimeToSeconds("0:40-0:44"), text: "I blame it on the model broad with the hollywood smile"},
    {time: TimeToSeconds("0:45"), text: "OW"},
    {time: TimeToSeconds("0:47-0:50"), text: "Stripper booty and a rack like wow"},
    {time: TimeToSeconds("0:50-0:51"), text: "Brain like Berkley"},
    {time: TimeToSeconds("0:52-0:55"), text: "Met her at Coachella I went to see Jigga, She went to see Z Trip"},
    {time: TimeToSeconds("0:56"), text: "Perfect"},
    {time: TimeToSeconds("0:57-1:00"), text: "I took a seat on the ice cold lawn, She handed me a ice blue bong"},
    {time: TimeToSeconds("1:01"), text: "WHATEVER"},
    {time: TimeToSeconds("1:02-1:05"), text: "She said she wanna be a dentist really badly"},
    {time: TimeToSeconds("1:06-1:10"), text: "She's in school paying for tuition doing porn in the Valley"},
    {time: TimeToSeconds("1:11"), text: "At least she workin'"},
    //[Pre-Chorus]
    {time: TimeToSeconds("1:12-1:14"), text: "But girl I can't feel my face"},
    {time: TimeToSeconds("1:15-1:16"), text: "What are we smokin' anyway?"},
    {time: TimeToSeconds("1:17-1:19"), text: "She said don't let the high go to waste"},
    {time: TimeToSeconds("1:20-1:22"), text: "But can you taste a little taste of..."},
    //[Chorus]
    {time: TimeToSeconds("1:23"), text: "Novacane"},
    {time: TimeToSeconds("1:24-1:26"), text: "Baby"},
    {time: TimeToSeconds("1:28-1:32"), text: "Novacane, Baby I want you"},
    {time: TimeToSeconds("1:33-1:35"), text: "Fuck me good, fuck me long, fuck my numb"},
    {time: TimeToSeconds("1:35-1:37"), text: "Love me now, when I'm gone love me none"},
    {time: TimeToSeconds("1:38-1:40"), text: "Love me none, love me none"},
    {time: TimeToSeconds("1:41-1:44"), text: "Numb, numb, numb, numb"},
    //[Verse 2]
    {time: TimeToSeconds("1:45"), text: "Sink Full of Dishes"},
    {time: TimeToSeconds("1:47"), text: "Pacing in the Kitchen"},
    {time: TimeToSeconds("1:48-1:49"), text: "Cocaine for Breakfast"},
    {time: TimeToSeconds("1:50"), text: "YIKES!"},
    {time: TimeToSeconds("1:51"), text: "Bed full of women"},
    {time: TimeToSeconds("1:52"), text: "Flip on a tripod"},
    {time: TimeToSeconds("1:53-1:54"), text: "Little red light on"},
    {time: TimeToSeconds("1:55"), text: "Shooting, I'm feeling like"},
    {time: TimeToSeconds("1:56-1:57"), text: "Stanley Kubrick"},
    {time: TimeToSeconds("1:59-2:00"), text: "This is some visionary shit"},
    {time: TimeToSeconds("2:01-2:04"), text: "Been tryna film pleasure with my eyes wide shut but it keeps on moving"},
    {time: TimeToSeconds("2:06:2:10"), text: "I blame on the Model Broad with the Hollywood smile"},
    {time: TimeToSeconds("2:11-2:15"), text: "Stripper booty with a rack like wow"},
    {time: TimeToSeconds("2:15-2:16"), text: "I'll never forget you"},
    {time: TimeToSeconds("2:17"), text: "You put me on a feeling"},
    {time: TimeToSeconds("2:18"), text: "I never had"},
    {time: TimeToSeconds("2:19"), text: "never had"},
    {time: TimeToSeconds("2:20"), text: "Never had (Never)"},
    {time: TimeToSeconds("2:21-2:23"), text: "And ever since I've been tryna get it back"},
    {time: TimeToSeconds("2:24-2:25"), text: "And pick it up and it put it back"},
    {time: TimeToSeconds("2:27-2:30"), text: "Now I'm something like the chemist on campus"},
    {time: TimeToSeconds("2:31-2:32"), text: "But there's no drug around"},
    {time: TimeToSeconds("2:34-2:35"), text: "Quite like what I found in you"},
    {time: TimeToSeconds("2:36"), text: "You"},
    //[Pre-Chorus]
    {time: TimeToSeconds("2:36-2:39"), text: "I still can't feel my face"},
    {time: TimeToSeconds("2:40-2:41"), text: "What am I smoking anyway"},
    {time: TimeToSeconds("2:42-2:44"), text: "She said don't let the high go to waste"},
    {time: TimeToSeconds("2:45-2:46"), text: "But can you taste a little taste of..."},
    //[Chorus]
    {time: TimeToSeconds("2:48-2:49"), text: "Novacane"},
    {time: TimeToSeconds("2:50-2:51"), text: "Baby"},
    {time: TimeToSeconds("2:52-2:56"), text: "Novacane, Baby I want you"},
    {time: TimeToSeconds("2:57-2:59"), text: "Fuck me good, fuck me long, fuck my numb"},
    {time: TimeToSeconds("3:00-3:02"), text: "Love me now, when I'm gone love me none"},
    {time: TimeToSeconds("3:03-3:05"), text: "Love me none, love me none"},
    {time: TimeToSeconds("3:05-3:07"), text: "Numb, numb, numb, numb"},
    //[Bridge]
    {time: TimeToSeconds("3:08-3:11"), text: "Novacane"},
    {time: TimeToSeconds("3:13-3:17"), text: "Numb the Pain"},
    {time: TimeToSeconds("3:19-3:22"), text: "Novacane"},
    {time: TimeToSeconds("3:23-3:25"), text: "For the pain, for the pain"},
    {time: TimeToSeconds("3:26-3:27"), text: "Novacane, Novacane"},
    //[Outro]
    {time: TimeToSeconds("3:49-3:50"), text: "Pretty Girls involved with me"},
    {time: TimeToSeconds("3:51-3:54"), text: "Makin' pretty love to me, pretty"},
    {time: TimeToSeconds("3:56-3:57"), text: "Pity, pity"},
    {time: TimeToSeconds("3:59-4:01"), text: "All the pretty girls involved with me"},
    {time: TimeToSeconds("4:02-4:05"), text: "Makin' pretty love to me, pretty"},
    {time: TimeToSeconds("4:06-4:07"), text: "Pity, pity"},
    {time: TimeToSeconds("4:10"), text: "I can't feel a thing"},
    {time: TimeToSeconds("4:11-4:14"), text: "I can't feel, can't tell a thing"},
    {time: TimeToSeconds("4:15"), text: "Can't a feel a thing"},
    {time: TimeToSeconds("4:17-4:19"), text: "Can't feel, feel, feel, feel her"},
    {time: TimeToSeconds("4:20-4:21"), text: "I can't feel, feel her"},
    {time: TimeToSeconds("4:22-4:24"), text: "Novacane"},
    {time: TimeToSeconds("4:25-4:26"), text: "I can't feel, feel her"},
    {time: TimeToSeconds("4:27-4:29"), text: "Novacane for the pain, for the pain"},
    {time: TimeToSeconds("4:30-4:31"), text: "I can't, can't feel"},
    {time: TimeToSeconds("4:32"), text: "Feel Her"},
    {time: TimeToSeconds("4:34"), text: "Feel Her"},
    {time: TimeToSeconds("4:38-4:39"), text: "Novacane"},
    {time: TimeToSeconds("4:40"), text: "Caine"},
];

playButton.addEventListener('click', () =>{
    song.play();
    let currentIndex = 0;

    const interval = setInterval(() =>{
        const currentTime = song.currentTime;

        if (currentIndex < lyrics.length && currentTime >= lyrics[currentIndex].time){

            lyricsContainer.innerText = lyrics[currentIndex].text;
            
            setTimeout(() => {
                lyricsContainer.innerText = ""; 
            }, 10000);

            currentIndex++;
        }

        if (currentIndex >= lyrics.length){
            clearInterval(interval);
        }
    }, 500);
});

