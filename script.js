// script.js

// Wait for the DOM content to load before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

    // Example: Change the text content of an element
    var header = document.querySelector("h1");
    header.textContent = "Hello, World!";
    
    // Example: Add event listener to the explore button
    var exploreButton = document.querySelector(".btn");
    exploreButton.addEventListener("click", function() {
        // Add 'explosion' class to trigger animation
        this.classList.add("explosion");

        // Remove the explosion class after the animation completes
        setTimeout(() => {
            this.classList.remove("explosion");
        }, 500);
    });
});

