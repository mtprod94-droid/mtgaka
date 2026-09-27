document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            document.body.classList.toggle(
                "menu-is-open",
                isOpen
            );
        });

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("menu-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-is-open"
                );
            });

        });
    }


    /* =====================================================
       HEADER — SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector(".site-header");

    const handleHeaderScroll = () => {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    };

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


    /* =====================================================
       HERO — SUBTLE MOUSE MOVEMENT
       ===================================================== */

    const heroVisual = document.querySelector(".hero-visual");

    if (
        heroVisual &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        window.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 16;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 16;

            heroVisual.style.transform =
                `translateY(-50%) translate(${x}px, ${y}px)`;

        });
    }


    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".luxury-intro, .experience-item, .final-cta"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observerInstance.unobserve(
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
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("is-visible");
        });
    }


    /* =====================================================
       EXPERIENCE ITEMS — INTERACTION
       ===================================================== */

    const experienceItems =
        document.querySelectorAll(".experience-item");

    experienceItems.forEach(item => {

        item.addEventListener("mouseenter", () => {
            item.classList.add("is-active");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("is-active");
        });

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const footerBottom =
        document.querySelector(".footer-bottom");

    if (footerBottom) {

        const currentYear =
            new Date().getFullYear();

        footerBottom.innerHTML =
            `© ${currentYear} MT.GAKA — Tous droits réservés.`;
    }


    /* =====================================================
       ESC KEY — CLOSE MOBILE MENU
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        if (
            navigation &&
            navigation.classList.contains("menu-open")
        ) {

            navigation.classList.remove("menu-open");

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            document.body.classList.remove(
                "menu-is-open"
            );
        }
    });

});