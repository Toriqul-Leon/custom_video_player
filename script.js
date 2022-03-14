const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// !play And Pause Video
toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
// !Update Play/Pause Icon
updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

// !Update Progress and timestamp
updateProgress = () => {
  return true;
};

// !Set Video progress
function setVideoProgress() {
  return true;
}

// !Stop Video
stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// !Events
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
