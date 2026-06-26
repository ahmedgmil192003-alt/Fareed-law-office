// ======================
// Sticky Header
// ======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = "#050d17";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(7,19,31,.95)";
        header.style.boxShadow = "none";
    }
});


// ======================
// Cards Animation
// ======================

const cards = document.querySelectorAll(".card");

if (cards.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = ".6s";

        observer.observe(card);

    });

}


// ======================
// Counter
// ======================

const counters = document.querySelectorAll(".stats h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = parseInt(counter.innerText);

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 80);

                if (count >= target) {

                    if (counter.innerText.includes("%")) {
                        counter.innerText = target + "%";
                    } else {
                        counter.innerText = target + "+";
                    }

                } else {

                    if (counter.innerText.includes("%")) {
                        counter.innerText = count + "%";
                    } else {
                        counter.innerText = count + "+";
                    }

                    requestAnimationFrame(update);

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


// ======================
// EmailJS
// ======================

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "KU4GVue1z0CA3SIF6",
    });

    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.sendForm(
                "service_v2wehzz",
                "template_f86ls8p",
                this
            ).then(() => {

                alert("تم إرسال رسالتك بنجاح ✅");

                form.reset();

            }).catch((error) => {

                console.log(error);

                alert("حدث خطأ أثناء إرسال الرسالة ❌");

            });

        });

    }

}