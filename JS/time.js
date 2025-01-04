function startLiveTime() {
            // Get the current time
            let currentTime = new Date();

            // Function to update the displayed time
            function updateTime() {
                currentTime.setSeconds(currentTime.getSeconds() + 1); // Increment by 1 second
                document.getElementById("datetime").innerHTML = currentTime.toLocaleTimeString(); // Display time
            }

            // Update the time every second
            setInterval(updateTime, 1000);

            // Display the initial time immediately
            updateTime();
