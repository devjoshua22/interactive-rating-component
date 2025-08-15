// interactive-rating.js
// Handles rating submission and thank you state

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.rating-form');
  const ratingState = document.querySelector('.rating-state');
  const thankyouState = document.querySelector('.thankyou-state');
  const selectedValue = document.querySelector('.selected-value');


  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const rating = form.rating.value;
    if (rating) {
      ratingState.style.display = 'none';
      thankyouState.style.display = 'flex';
      selectedValue.textContent = rating;
    }
  });
});
