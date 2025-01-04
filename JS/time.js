function updateTime(startTime) {
            const now = new Date();
            const elapsedTime = now - startTime; // Calculate elapsed time in milliseconds
            const elapsedDate = new Date(elapsedTime);

            // Format the elapsed time (HH:MM:SS)
            const hours = String(elapsedDate.getUTCHours()).padStart(2, '0');
            const minutes = String(elapsedDate.getUTCMinutes()).padStart(2, '0');
            const seconds = String(elapsedDate.getUTCSeconds()).padStart(2, '0');
            
            document.getElementById("datetime").innerHTML = `${hours}:${minutes}:${seconds}`;
        }

        // Initialize the timer
        function initTimer() {
            let startTime;

            // Check if a start time is saved in localStorage
            if (localStorage.getItem("startTime")) {
                startTime = new Date(parseInt(localStorage.getItem("startTime")));
            } else {
                // If no saved time, set the current time as the start time
                startTime = new Date();
                localStorage.setItem("startTime", startTime.getTime());
            }

            // Update the time every second
            setInterval(() => updateTime(startTime), 1000);
        }

        // Start the timer when the page loads
        initTimer();
