// script.js: Handles adding gigs and updating dynamic content

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Translation Gig Tracker Ready');
    console.log('form-testing');

let gigsData = JSON.parse(localStorage.getItem("gigs")) || [];

 // Updates footer year automatically
const yearEl = document.getElementById('year'); 
yearEl.textContent = new Date().getFullYear(); // Make sure an element with id="year" exists


 // Create a simple placeholder card
 const gigs = document.getElementById('gigs');
// Adds a new placeholder gig card when "Add Gig" button is clicked
const addBtn = document.getElementById('add-gig-btn');
const gigForm = document.getElementById('gig-form');

   gigsData.forEach(gig => {
   const gigCard = document.createElement('div');
   gigCard.className = 'gig-card';
   gigCard.innerHTML = `<strong>Client Name:${gig.client}</strong><p class="muted">Date:${gig.date}</p>`;
   gigs.prepend(gigCard);

   });

addBtn.addEventListener('click', () => {
    gigForm.style.display = "block";
});

 gigForm.addEventListener('submit', (event) => {

    event.preventDefault(); // stops the form from reloading the page

    const client = gigForm.querySelector('input[name="client"]').value;
    const date = gigForm.querySelector('input[name="date"]').value;

      if(client.trim() === "" || date.trim() === "") {

        return;
    }

    //new gig object
    const newGig = { client, date };

    //add it to the gigs array
    gigsData.push(newGig);

    //save array back to local storage
    localStorage.setItem("gigs", JSON.stringify(gigsData));
    
 
    const gigCard = document.createElement('div');
    gigCard.className = 'gig-card';
    gigCard.innerHTML = `<strong>Client Name:${client}</strong><p class="muted">Date:${date}</p>`;
    gigs.prepend(gigCard); // Add the new card to the top of the gig list

    gigForm.style.display = "none"; // hide form again

     gigForm.reset(); //reset input


 });


});








