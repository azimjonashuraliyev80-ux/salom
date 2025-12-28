const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const trackTitle = document.getElementById("track-title");

let tracks = ["track1.mp3", "track2.mp3", "track3.mp3"];
let trackNames = ["Track 1", "Track 2", "Track 3"];
let currentTrack = 0;

// Play / Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "Pause";
  } else {
    audio.pause();
    playBtn.innerText = "Play";
  }
});

// Next track
nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.innerText = "Pause";
});

// Previous track
prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.innerText = "Pause";
});

// Load track
function loadTrack(index) {
  audio.src = tracks[index];
  trackTitle.innerText = trackNames[index];
  progress.style.width = "0%";
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
});

// Click on progress bar
document.querySelector(".progress-container").addEventListener("click", e => {
  const width = e.currentTarget.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});
