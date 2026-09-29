/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});



/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================================================
   CONTACT FORM
========================================================= */

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

    const budget =
        document.getElementById("budget").value;

    const message =
        document.getElementById("message").value.trim();


    if (
        !name ||
        !email ||
        !projectType ||
        !budget ||
        !message
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color =
            "#dc2626";

        return;

    }


    /*
        WhatsApp number:
        +91 7498643294
    */

    const phone =
        "917498643294";


    const whatsappMessage =

`Hello Abhishek,

I would like to discuss a website project.

Name: ${name}

Email: ${email}

Project Type: ${projectType}

Budget: ${budget}

Project Details:
${message}

Thank you.`;


    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    formMessage.textContent =
        "Opening WhatsApp...";

    formMessage.style.color =
        "#16a34a";


    window.open(
        whatsappURL,
        "_blank"
    );


    contactForm.reset();

});



/* =========================================================
   PROJECT MESSAGE
========================================================= */

function showProjectMessage(event) {

    event.preventDefault();

    alert(
        "This demo project is currently being prepared. Please contact me if you would like a similar website."
    );

}



/* =========================================================
   SOCIAL LINKS
========================================================= */

function showSocialMessage(event) {

    event.preventDefault();

    alert(
        "Social profile link will be added soon."
    );

}



/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .pricing-card, .project-card, .why-card, .process-item"
    );


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function(element) {

    observer.observe(element);

});