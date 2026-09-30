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