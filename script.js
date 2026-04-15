 let playBtn = document.querySelector(".controls button:nth-child(2)");
let songs = [
    {
        title: "Cinnamon Girl",
        src: "Cinnamon Girl.mp3",
        cover: "cover1.jpg"
    },
    {
        title: "Chemtrails Over The Country Club",
        src: "Chemtrails Over The Country Club.mp3",
        cover: "cover2.jpg"
    }
];

let index = 0;

let audio = document.getElementById("audio");
let title = document.getElementById("title");
let cover = document.getElementById("cover");

function loadSong() {
    audio.src = songs[index].src;
    title.innerText = songs[index].title;
    cover.src = songs[index].cover;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        updatePlayUI(true);
    } else {
        audio.pause();
        updatePlayUI(false);
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
    updatePlayUI(true);   // 🔥 only this
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
    updatePlayUI(true);
}
let progress = document.getElementById("progress");

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
let volume = document.getElementById("volume");

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});
audio.addEventListener("ended", () => {
    nextSong();
    
});
function updatePlayUI(isPlaying) {
    let playBtn = document.querySelector(".controls button:nth-child(2)");

    if (isPlaying) {
        playBtn.innerHTML = "⏸️";
        cover.classList.add("playing");
    } else {
        playBtn.innerHTML = "▶️";
        cover.classList.remove("playing");
    }
}
audio.addEventListener("pause", () => updatePlayUI(false));
audio.addEventListener("play", () => updatePlayUI(true));
loadSong();