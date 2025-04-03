let timeLeft = 30 * 60;
        const navbar = document.getElementById("promo-navbar");
        const timerElement = document.getElementById("timer");

        window.addEventListener("scroll", () => {
            if (window.scrollY > -1) {
                navbar.classList.add("show");
            } else {
                navbar.classList.remove("show");
            }
        });

        function updateTimer() {
            if (timeLeft <= 0) {
                timerElement.textContent = "Promoção encerrada!";
                return;
            }
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            timeLeft--;
        }

        setInterval(updateTimer, 1000);