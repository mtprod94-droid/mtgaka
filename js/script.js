document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton = document.querySelector(".menu-open");
    const navigation = document.querySelector(".main-navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                document.body.classList.toggle("menu-is-open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        navigation
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    document.body.classList.remove(
                        "menu-is-open"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });


        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                document.body.classList.remove(
                    "menu-is-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       HEADER SCROLL
       ===================================================== */

    const header =
        document.querySelector(".site-header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }

        };

        updateHeader();

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

    }


    /* =====================================================
       FOOTER YEAR
       ===================================================== */

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});

/* ========================================
   MT.GAKA — COMPTE À REBOURS
======================================== */
document.addEventListener("DOMContentLoaded", function () {
    const countdown = document.getElementById("gaka-countdown");
    if (!countdown) return;
    const daysElement = document.getElementById("countdown-days");
    const hoursElement = document.getElementById("countdown-hours");
    const minutesElement = document.getElementById("countdown-minutes");
    const secondsElement = document.getElementById("countdown-seconds");
    // 24 décembre 2026 à 18h00 au Togo (UTC+0)
    const eventDate = Date.UTC(2026, 11, 24, 18, 0, 0);
    function updateCountdown() {
        const now = Date.now();
        const difference = eventDate - now;
        if (difference <= 0) {
            countdown.innerHTML =
                '<p class="countdown-heading">LE GRAND JOUR EST ARRIVÉ !</p>' +
                '<p class="countdown-footer">MT.GAKA CHALLENGE DAY · 24.12.2026</p>';
            return;
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
            (difference % (1000 * 60)) / 1000
        );
        daysElement.textContent = String(days).padStart(3, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
});