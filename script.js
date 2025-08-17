// script.js: Handles adding gigs and updating dynamic content

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Translation Gig Tracker Ready');
    console.log('form-testing');

    //------ LocalStorage setup -------
    // Load saved gigs from localStorage (or start with an empty array)
let gigsData = JSON.parse(localStorage.getItem("gigs")) || [];

 //--------- Footer year ------------
const yearEl = document.getElementById('year'); 
yearEl.textContent = new Date().getFullYear(); 


 // ----- Form & Button -----
const addBtn = document.getElementById('add-gig-btn');
const gigForm = document.getElementById('gig-form');
const gigs = document.getElementById('gigs');


// Show form when clicking "Add Gig" button
addBtn.addEventListener('click', () => {
    gigForm.style.display = "block";
});


// ----- Render existing gigs on page load ----
   gigsData.forEach(gig => {
   const gigCard = document.createElement('div');
   gigCard.className = 'gig-card-new';
   gigCard.innerHTML = `<strong>Client Name: ${gig.client}</strong><p class="muted">Date: ${gig.date}</p>`;
   gigs.prepend(gigCard);

   setTimeout(() => {
  gigCard.classList.remove('new');
 }, 300);

   });



 // ----- Handle new gig submissions -----
 gigForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent for from refreshing the page


    // get form values
    const client = gigForm.querySelector('input[name="client"]').value;
    const date = gigForm.querySelector('input[name="date"]').value;


     // Ignore empty submissions
      if(client.trim() === "" || date.trim() === "") {
        return;
    }

    
    // Create new gig object
    const newGig = { client, date };

    // Add to gigs array & save in localStorage
    gigsData.push(newGig);
    localStorage.setItem("gigs", JSON.stringify(gigsData));
    
 
    // Create and display a new card
    const gigCard = document.createElement('div');
    gigCard.className = 'gig-card';
    gigCard.innerHTML = `<strong>Client Name:${client}</strong><p class="muted">Date:${date}</p>`;
    gigs.prepend(gigCard); 


    // Hide and reset form
    gigForm.style.display = "none";
     gigForm.reset(); 

  });

});








