document.addEventListener("DOMContentLoaded", function() {
    const changeImageBtn = document.getElementById("changeImageBtn");
    const heroSection = document.querySelector(".hero");

    const originalBackgroundImage = "jujtsu.jpg"; // Original image
    const newBackgroundImage = "imgg.jpg"; // New image

    let isOriginalImage = true;

    changeImageBtn.addEventListener("click", function() {
        if (isOriginalImage) {
            heroSection.style.backgroundImage = `url(${newBackgroundImage})`;
        } else {
            heroSection.style.backgroundImage = `url(${originalBackgroundImage})`;
        }
        isOriginalImage = !isOriginalImage;
    });
});
