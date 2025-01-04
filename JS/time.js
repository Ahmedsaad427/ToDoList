function updateDateTime() {
            const dateTimeElement = document.getElementById('dateTime');
            const now = new Date();
            dateTimeElement.textContent = now.toLocaleString(); // Update the element with the current date and time
        }

        // Update the date and time every second
        setInterval(updateDateTime, 1000);

        // Display the initial date and time immediately
        updateDateTime();
