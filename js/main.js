const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});
function calculateEMI() {
    let P = parseFloat(document.getElementById("loanAmount").value);
    let annualRate = parseFloat(document.getElementById("interestRate").value);
    let years = parseFloat(document.getElementById("loanYears").value);

    let R = annualRate / 12 / 100;
    let N = years * 12;

    let emi = (P * R * Math.pow(1 + R, N)) /
              (Math.pow(1 + R, N) - 1);

    document.getElementById("emiResult").innerText =
        "Monthly EMI: ₹" + emi.toFixed(0);
}

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        let answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});

function revealOnScroll() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        let top = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
    darkToggle.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");
    });
}

window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.padding = "12px 8%";
    } else {
        navbar.style.padding = "20px 8%";
    }
});