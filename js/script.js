const hamburger = document.querySelector(".hamburger");
const overlayNav = document.querySelector(".overlay-nav");
const anchors = document.querySelectorAll(".overlay-nav ul a");

hamburger.addEventListener("click", (e) => {
    // console.log(overlayNav.classList);
    overlayNav.classList.toggle("active");
}
)

// Close the overlay nav when a link is clicked:
anchors.forEach(link => {
    link.addEventListener("click", (e) => {
        overlayNav.classList.remove("active");
    }
    )
});