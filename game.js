// Wait for the page to load
window.onload = function() {
    const loader = document.querySelector('.loader');
    
    // Show loader for 1 second
    loader.classList.add('show');

    // Hide loader after 1 second
    setTimeout(function() {
        loader.classList.remove('show');
    }, 1500);
};




const audioElement = document.getElementById('backgroundAudio');

// Function to check audio state and apply it
const checkAudioState = () => {
    const isAudioPlaying = localStorage.getItem('audioPlaying') === 'true';
    if (isAudioPlaying) {
        audioElement.play();  // Start the audio if it's supposed to play
    } else {
        audioElement.pause();  // Pause the audio if it's supposed to be paused
    }
};

// Check and set audio state on page load
window.addEventListener('load', checkAudioState);
       



const modal1 = document.getElementById("settingsModal1");
        const settingImage1 = document.querySelector(".clickable-image");
        const closeBtn1 = document.querySelector("#settingsModal1 .close");

        settingImage1.onclick = () => {
            modal1.style.display = "block";
            titleImage.classList.add("hidden");
            playButton.classList.add("hidden");
        };

        closeBtn1.onclick = () => {
            modal1.style.display = "none";
            titleImage.classList.remove("hidden");
            playButton.classList.remove("hidden");
        };

        window.onclick = (event) => {
            if (event.target == modal1) {
                modal1.style.display = "none";
                titleImage.classList.remove("hidden");
                playButton.classList.remove("hidden");
            }
        };
        document.getElementById("replay1").addEventListener("click", function() {
            location.reload(); // Reloads the current page
        });
        document.getElementById("replay2").addEventListener("click", function() {
            location.reload(); // Reloads the current page
        });


        let score = 0; 
        const scoreElement = document.getElementById('score');
// Function to show the "GOAL!!!" message after 2 seconds
function showGoalMessage() {
    console.log("Goal Scored!");
    score++; // Increment the score
    scoreElement.textContent = score;
    // Create an array of audio file paths
    const goalSounds = [
        'pics/goal1.ogg',
        'pics/goal4.ogg',
        'pics/goal6.ogg',
        'pics/goal7.ogg'
    ];

    // Select a random sound from the array
    const randomIndex = Math.floor(Math.random() * goalSounds.length);
    const randomSound = new Audio(goalSounds[randomIndex]);
    randomSound.loop = false;
    randomSound.play();

    // Create the div element for the goal message
    const goalDiv = document.createElement('div');
    goalDiv.style.position = 'fixed';
    goalDiv.style.top = '30%';
    goalDiv.style.left = '50%';
    goalDiv.style.transform = 'translate(-50%, -50%)'; // Center the div
    goalDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Transparent black
    goalDiv.style.width = '100%';
    goalDiv.style.height = '200px';
    goalDiv.style.display = 'flex';
    goalDiv.style.alignItems = 'center';
    goalDiv.style.justifyContent = 'center';
    goalDiv.style.zIndex = '1000'; // Make sure it appears on top of other content

    // Create the text element for the goal message
    const goalText = document.createElement('p');
    goalText.textContent = 'GOAL!!!';
    goalText.style.color = 'white'; // Text color
    goalText.style.fontSize = '80px';
    goalText.style.width = '70%'; // Text width
    goalText.style.height = '200px'; // Text height
    goalText.style.textAlign = 'center';
    goalText.style.lineHeight = '200px'; // Center the text vertically
    // Append the text to the div
    goalDiv.appendChild(goalText);

    // Append the div to the body
    document.body.appendChild(goalDiv);

    // Remove the goal message after 2 seconds
    setTimeout(() => {
        goalDiv.remove();

        // Show the image after 1 second of goal message disappearance
        setTimeout(() => {
            showImage();
        }, 1000); // 1 second delay before showing the image
    }, 1500); // Remove goal message after 1.5 seconds
}
function showGoalMissMessage() {
    // Play the miss sound
    let missSound = new Audio('pics/misses-wide4.ogg'); 
    missSound.loop = false;
    missSound.play();

    // Create the div element for the goal message
    const goalDiv = document.createElement('div');
    goalDiv.style.position = 'fixed';
    goalDiv.style.top = '30%';
    goalDiv.style.left = '50%';
    goalDiv.style.transform = 'translate(-50%, -50%)'; // Center the div
    goalDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Transparent black
    goalDiv.style.width = '100%';
    goalDiv.style.height = '200px';
    goalDiv.style.display = 'flex';
    goalDiv.style.alignItems = 'center';
    goalDiv.style.justifyContent = 'center';
    goalDiv.style.zIndex = '1000'; // Make sure it appears on top of other content

    // Create the text element for the goal message
    const goalText = document.createElement('p');
    goalText.textContent = 'OOOOPS YOU MISSED THE GOAL!!!';
    goalText.style.color = 'white'; // Text color
    goalText.style.fontSize = '60px';
    goalText.style.width = '80%'; // Text width
    goalText.style.height = '200px'; // Text height
    goalText.style.textAlign = 'center';
    goalText.style.lineHeight = '200px'; // Center the text vertically
    // Append the text to the div
    goalDiv.appendChild(goalText);

    // Append the div to the body
    document.body.appendChild(goalDiv);

    // Remove the goal message after 2 seconds
    setTimeout(() => {
        goalDiv.remove();

        // Show the image after 1 second of goal message disappearance
        setTimeout(() => {
            showImage();
        }, 1000); // 1 second delay before showing the image
    }, 1500); // Remove goal message after 1.5 seconds
}


// Function to show the image after 1 second of goal message disappearing
function showImage() {
    // Create the image element
    const image = document.createElement('img');
    image.src = 'pics/title.png'; // Replace with the actual image URL
    image.style.position = 'fixed';
    image.style.top = '50%';
    image.style.left = '50%';
    image.style.transform = 'translate(-50%, -50%) scale(0)'; // Start from center with 0 scale
    image.style.transition = 'transform 1s ease, opacity 1s ease'; // Smooth transition for transform and opacity
    image.style.opacity = '0'; // Start with opacity 0
    image.style.zIndex = '1000'; // Ensure it appears on top of other content

    // Disable text selection and pointer interaction
    image.style.userSelect = 'none'; // Prevent selecting the image
    image.style.pointerEvents = 'none'; // Disable mouse interaction with the image

    // Append the image to the body
    document.body.appendChild(image);

    // Start the animation: scale to 1.5x size and fade in
    setTimeout(() => {
        image.style.transform = 'translate(-50%, -50%) scale(1.5)';
        image.style.opacity = '1'; // Fade in to full opacity
    }, 50); // Slight delay before starting the animation

    // Trigger disappear animation after 1 second
    setTimeout(() => {
        image.style.transform = 'translate(-50%, -50%) scale(0)'; // Scale back to 0
        image.style.opacity = '0'; // Fade out to 0 opacity
    }, 1000); // Trigger disappear animation after 1 second

    // Remove the image from the DOM after the animation ends (2 seconds)
    setTimeout(() => {
        image.remove();
    }, 2000); // Remove after 2 seconds (1 second of animation + 1 second wait)
}







