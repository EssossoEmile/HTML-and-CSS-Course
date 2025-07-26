document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");

    document.querySelectorAll(".lightbox-trigger").forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "block";
            lightboxImg.src = this.dataset.full;
        });
    });

    close.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
