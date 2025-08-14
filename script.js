// script.js: Handles adding gigs and updating dynamic content

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Translation Gig Tracker Ready');


// Updates footer year automatically
const yearEl = document.getElementById('year'); // Make sure an element with id="year" exists
yearEl.textContent = new Date().getFullYear();

// Adds a new placeholder gig card when "Add Gig" button is clicked
const addBtn = document.getElementById('add-gig-btn');
const gigForm = document.getElementById('gig-form');
addBtn.addEventListener('click', () => {
    gigForm.style.display = "block";

  // Create a simple placeholder card
 const gigs = document.getElementById('gigs');
  


 gigForm.addEventListener('submit', (event) => {

    event.preventDefault(); // stops the form from reloading the page
    const client = gigForm.querySelector('input[name="client"]').value;
    const date = gigForm.querySelector('input[name="date"]').value;
    console.log(client, date);
    const card = document.createElement('div');
    card.className = 'gig-card';
    card.innerHTML = `<strong>Client Name:${client}</strong><p class="muted">Date:${date}</p>`;
    gigs.prepend(card); // Add the new card to the top of the gig list

    gigForm.style.display = "none"; // hide form again

     gigForm.reset(); //reset input


 });
});


});





