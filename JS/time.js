let dt = new Date();

        // Function to update the date and time
        function updateDateTime() {
            dt.setSeconds(dt.getSeconds() + 1); // Increment by 1 second
            document.getElementById("datetime").innerHTML = dt.toLocaleString(); // Display updated time
        }

        // Start updating the time every second
        setInterval(updateDateTime, 1000);

        // Display the initial date and time
        updateDateTime();
