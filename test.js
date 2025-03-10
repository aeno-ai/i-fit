document.addEventListener("DOMContentLoaded", function () {
    let foodsContainer = document.querySelector(".foods");
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    nextButton.addEventListener("click", function () {
        foodsContainer.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right
    });

    prevButton.addEventListener("click", function () {
        foodsContainer.scrollBy({ left: -300, behavior: "smooth" }); // Scroll left
    });
});
