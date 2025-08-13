document.addEventListener('DOMContentLoaded', () => {
    console.log('Translation Gig Tracker Ready');


// Update footer year

const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

// Button Event - Day 4 task
const addBtn = document.getElementById('add-gig-btn');
addBtn.addEventListener('click', () => {
    console.log('gig added');

// For now: show a simple placeholder card
const gigs = document.getElementById('gigs');
const card = document.createElement('div');
card.className = 'gig-card';
card.innerHTML = `<strong>Untitled gig</strong><p class="muted">No details yet</p>`;
gigs.prepend(card);
 });

});