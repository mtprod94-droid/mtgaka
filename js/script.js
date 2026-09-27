document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton = document.querySelector(".menu-open");
    const navigation = document.querySelector(".main-navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            document.body.classList.toggle("menu-is-open");

            const isOpen =
                document.body.classList.contains("menu-is-open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                document.body.classList.remove("menu-is-open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                document.body.classList.remove("menu-is-open");

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

    const header = document.querySelector(".site-header");

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
       HERO MOVEMENT
       ===================================================== */

    const heroVisual = document.querySelector(".hero-visual");

    if (
        heroVisual &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 12;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 12;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".luxury-intro, .experience-item, .final-cta"
    );

    if (revealElements.length) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    }


    /* =====================================================
       EXPERIENCE HOVER
       ===================================================== */

    const experienceItems =
        document.querySelectorAll(".experience-item");

    experienceItems.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            experienceItems.forEach((other) => {
                other.classList.remove("is-active");
            });

            item.classList.add("is-active");

        });

    });


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