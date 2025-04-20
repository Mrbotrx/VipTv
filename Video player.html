.<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Player</title>
    <style>
        #video-player {
            max-width: 100%;
            background-color: #000;
        }
        .controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 10px;
        }
    </style>
</head>
<body>

<video id="video-player" width="600" controls>
    <source src="https://raw.githubusercontent.com/Mrbotrx/VipTv/refs/heads/Main/KB_Vip-TV.m3u8" type="video/mp4">
    Your browser does not support the video tag.
</video>

<div class="controls">
    <button id="playPauseBtn">Play</button>
    <input type="range" id="seekBar" value="0" step="1">
    <span id="timeDisplay">00:00 / 00:00</span>
</div>

<script>
    const video = document.getElementById('video-player');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const seekBar = document.getElementById('seekBar');
    const timeDisplay = document.getElementById('timeDisplay');

    // Play/Pause Button Functionality
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Update Seek Bar as the video plays
    video.addEventListener('timeupdate', () => {
        const value = (video.currentTime / video.duration) * 100;
        seekBar.value = value;

        // Update the time display
        const currentMinutes = Math.floor(video.currentTime / 60);
        const currentSeconds = Math.floor(video.currentTime % 60);
        const totalMinutes = Math.floor(video.duration / 60);
        const totalSeconds = Math.floor(video.duration % 60);

        timeDisplay.textContent = `${formatTime(currentMinutes)}:${formatTime(currentSeconds)} / ${formatTime(totalMinutes)}:${formatTime(totalSeconds)}`;
    });

    // Sync Seek Bar with Video Time
    seekBar.addEventListener('input', () => {
        const value = seekBar.value * video.duration / 100;
        video.currentTime = value;
    });

    // Helper function to format time
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
</script>

</body>
</html>
