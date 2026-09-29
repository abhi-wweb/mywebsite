// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close mobile menu when clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const projectType =
        document.getElementById("projectType").value;

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        projectType === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "#d13b3b";

        return;
    }


    formMessage.textContent =
        "Thank you! Your project request has been received.";

    formMessage.style.color = "#229653";


    contactForm.reset();

});


// ================= FOOTER YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(
        ".service-card, .project-card, .why-card, .process-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


// ================= PROJECT BUTTONS =================

document.querySelectorAll(".project-link").forEach(link => {

    link.addEventListener("click", function(event) {

        if (this.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Add your live project URL here."
            );

        }

    });

});