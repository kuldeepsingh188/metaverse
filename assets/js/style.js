document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back-to-top");

    // Show/hide the button based on the scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
            // Add your code to display the actual content here
}, 9000); // Adjust the timeout duration as needed

setTimeout(() => {
    document.body.classList.remove("overflow-hidden");
    document.getElementById("pre-loader").style.display = "none";
}, 2500);
// JavaScript to handle the responsive navigation menu
function show() {
    document.getElementById("navMenu").classList.add("!start-0");
    document.body.classList.add("overflow-hidden");
}

function opennav() {
    document.getElementById("menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closenav() {
    document.getElementById("menu").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}