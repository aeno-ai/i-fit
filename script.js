document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", function () { //DOMContent = hinihintay muna mag load
    let darkModeButton = document.querySelector(".dark-mode button");
    let darkModeButtonMobile = document.querySelector(".dark-mode-mobile button");
    let body = document.body;
    let themeIcon = document.querySelector(".dark-mode button img");
    let themeMenu = document.querySelector(".menu-toggle img");

    function update() {
        if (body.classList.contains("dark-theme")) {
            themeIcon.src = themeIcon.getAttribute("theme-sun");
            themeMenu.src = themeMenu.getAttribute("menu-line-dark");
        } else {
            themeIcon.src = themeIcon.getAttribute("theme-moon");
            themeMenu.src = themeMenu.getAttribute("menu-line");
        }
    }

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        update();
    }

    function toggleDarkMode() {
        body.classList.toggle("dark-theme");
        update();
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }

    darkModeButton.addEventListener("click", toggleDarkMode);
    if (darkModeButtonMobile) {
        darkModeButtonMobile.addEventListener("click", toggleDarkMode);
    }
});

// BMI PAGE
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;
    

    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2); // para dalawang decimal
        let category = "";
        
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        document.getElementById("result").innerText = "Your BMI is " + bmi + " " + category + ".";
    } 
    else {
        document.getElementById("result").innerText = "Please enter valid values.";
    }
}

//slider 

