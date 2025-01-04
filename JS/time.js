function updateTime() {
            const dt = new Date();
            document.getElementById("datetime").innerHTML = dt.toLocaleString();
        }
        
        setInterval(updateTime, 1000);

        updateTime();
