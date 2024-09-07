// Set the initial time (5 seconds)
let timeRemaining = 5;
const timer = document.getElementById("timer");

// Function to update the timer display
function updateTimer() {
    timer.textContent = timeRemaining;
}

// Function to start the countdown
function startCountdown() {
    // Update the timer display immediately
    updateTimer();

    // Set an interval to update the timer every second
    const intervalId = setInterval(() => {
        timeRemaining--;

        if (timeRemaining <= 0) {
            clearInterval(intervalId); // Stop the countdown when it reaches 0
            timeRemaining = 0;
            timer.textContent = "time is up"; // Display "time is up"
            startDotSequence(); // Start the dot sequence animation
        } else {
            updateTimer();
        }
    }, 1000); // 1000 ms = 1 second
}

function startDotSequence() {
    const dots = ["", ".", "..", "..."];
    let dotIndex = 0;
    let repeatCount = 0;

    // Display "disk is formatting" before the dots
    timer.textContent = "disk is formatting";

    const dotInterval = setInterval(() => {
        timer.textContent = "disk is formatting " + dots[dotIndex]; // Update with message and current dot pattern
        dotIndex = (dotIndex + 1) % dots.length; // Move to the next dot pattern

        if (dotIndex === 0) {
            repeatCount++;
        }

        // Stop after displaying the dots sequence six times
        if (repeatCount >= 6) {
            clearInterval(dotInterval);
            displayFinalMessages(); // Display final messages after the dots animation
        }
    }, 250); // Change every 250ms
}

function displayFinalMessages() {
    // After the dot sequence, display the final messages with delays
    setTimeout(() => {
        timer.textContent = "disk has been formatted";
    }, 2000); // Show after 2 seconds

    setTimeout(() => {
        timer.textContent = "You can restart your computer now";
    }, 5000); // Show after 5 seconds (total of 7 seconds after countdown ends)
}

// Start the countdown when the page loads
startCountdown();




/*let timeLeft = 4;
        const timer = document.getElementById("timer");
        const countdown = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                startDotSequence();
            } else {
                timer.textContent = timeLeft;
                timeLeft--;
            }
        }, 1000);

        function startDotSequence() {
            const dots = ["",".", "..", "..."];
            let dotIndex = 0;
            let repeatCount = 0;

            // Display "disk is formatting" before the dots
            timer.textContent = "disk is formatting";

            const dotInterval = setInterval(function() {
                timer.textContent = "disk is formatting " + dots[dotIndex]; // Update with message and current dot pattern
                dotIndex = (dotIndex + 1) % dots.length; // Move to the next dot pattern

                if (dotIndex === 0) {
                    repeatCount++;
                }

                // Stop after displaying the dots sequence four times
                if (repeatCount >= 6) {
                    clearInterval(dotInterval);
                    displayFinalMessage();
                }
            }, 250); // Change every 250ms
        }

        function displayFinalMessage() {
            // After the dot sequence, display the final message
            setTimeout(() => {
                timer.textContent = "disk has been formatted";
            }, 2000);
            setTimeout(() => {
                timer.textContent = "You can restart your computer now";
            }, 5000);
        }*/
        