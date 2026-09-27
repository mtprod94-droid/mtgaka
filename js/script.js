// =========================================
// MT.GAKA
// Main JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MOBILE MENU
    ====================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navigation.classList.remove("menu-open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });
    }


    /* =====================================
       SCROLL EFFECT
    ====================================== */

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 30) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    });


    /* =====================================
       MOUSE / TOUCH PARALLAX
    ====================================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (heroVisual && window.matchMedia("(pointer: fine)").matches) {

        heroVisual.addEventListener("mousemove", (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            heroVisual.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

        });

        heroVisual.addEventListener("mouseleave", () => {

            heroVisual.style.transform =
                "translate(0, 0)";

        });

    }


    /* =====================================
       REVEAL ELEMENTS
    ====================================== */

    const revealElements =
        document.querySelectorAll(
            ".intro-section, .activity-card, .event-banner"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    /* =====================================
       CURRENT YEAR
    ====================================== */

    const yearElement =
        document.querySelector(".copyright");

    if (yearElement) {

        const currentYear =
            new Date().getFullYear();

        yearElement.innerHTML =
            `© ${currentYear} MT.GAKA — Tous droits réservés.`;

    }

});
