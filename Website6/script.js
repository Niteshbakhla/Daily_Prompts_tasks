const sideBar = document.querySelector(".sideBar");
const btn = document.querySelector(".ri-menu-3-line");
const nav = document.querySelector("nav"); // Select your navigation bar

let toggle = false;
let lastScrollTop = 0; // Store last scroll position

// Function to close the sidebar and reset the button icon
function closeSideBar() {
            sideBar.style.left = "-100%"; // Close the sidebar
            btn.classList.remove("ri-close-fill"); // Remove the close icon
            btn.classList.add("ri-menu-3-line"); // Add the menu icon back
            toggle = false; // Reset the toggle state
}

// Button click event to toggle sidebar
btn.addEventListener("click", () => {
            toggle = !toggle;
            if (toggle) {
                        sideBar.style.left = "0%"; // Open the sidebar
                        btn.classList.add("ri-close-fill"); // Change to close icon
                        btn.classList.remove("ri-menu-3-line"); // Remove the menu icon
            } else {
                        closeSideBar(); // Close the sidebar
            }
});

// Scroll event to hide or show the navigation based on scroll direction
window.addEventListener("scroll", () => {
            let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // If the user is scrolling down (current scroll position > previous scroll position)
            if (currentScrollTop > lastScrollTop) {
                        // Scroll down - hide the nav
                        nav.style.transform = "translateY(-100%)";
                        if (toggle) {
                                    closeSideBar(); // Close the sidebar if it's open
                        }
            } else {
                        // Scroll up - show the nav
                        nav.style.transform = "translateY(0%)";
            }

            // Update the last scroll position
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll positions
});
