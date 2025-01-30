document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header'); 
    var lcHeader = function() {
        if (header) {
            header.dataset.status = window.scrollY > 60 ? "scrolled" : "";
        }
    };
    window.addEventListener('scroll', lcHeader);
});

document.getElementById('year').textContent = new Date().getFullYear();

// Select all .count elements
const counts = document.querySelectorAll(".count");

// Function to handle selection
function selectCount(event) {
  // Remove the 'selected' class from all counts
  counts.forEach((count) => count.classList.remove("selected"));

  // Add 'selected' class to the clicked .count
  event.target.classList.add("selected");
}

// Set the default selected count (Engineering)
const defaultSelected = document.getElementById("default-selected");
defaultSelected.classList.add("selected");

// Add click event listeners to all .count elements
counts.forEach((count) => {
  count.addEventListener("click", selectCount);
});
