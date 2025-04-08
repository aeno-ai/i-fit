document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("toggle");
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

