let songs = [
    {
        title: "Song 1",
        src: "song1.mp3",
        cover: "cover1.jpg"
    },
    {
        title: "Song 2",
        src: "song2.mp3",
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
    } else {
        audio.pause();
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
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
audio.addEventListener("ended", nextSong);
loadSong();