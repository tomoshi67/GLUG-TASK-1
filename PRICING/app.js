// app.js - beginner-friendly version
const modal = document.querySelector('.modal');
const planLine = document.getElementById('planLine');
const paymentBlock = document.getElementById('paymentBlock');
const submitBtn = document.getElementById('submitBtn');
const emailInput = document.getElementById('email');
const successMsg = document.getElementById('successMsg');
const form = document.getElementById('signupForm');

// Show or hide payment section based on plan
function setPlan(plan) {
  if (plan === 'pro') {
    planLine.textContent = 'Plan: Pro';
    paymentBlock.style.display = 'block';
    submitBtn.textContent = 'Continue to payment';
  } else {
    planLine.textContent = 'Plan: Free';
    paymentBlock.style.display = 'none';
    submitBtn.textContent = 'Create account';
  }
}

// Open the modal and set the plan
function openModal(plan) {
  setPlan(plan || 'free');
  successMsg.hidden = true;
  modal.classList.add('is-open');
}

// Close the modal
function closeModal() {
  modal.classList.remove('is-open');
}

// Add click event to buttons that open modal
const openButtons = document.querySelectorAll('[data-open-modal="signup"]');
for (let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener('click', function() {
    const plan = this.getAttribute('data-plan');
    openModal(plan);
  });
}

// Add click event to buttons that close modal
const closeButtons = document.querySelectorAll('[data-close-modal]');
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', closeModal);
}

// Form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();

  if (!email.endsWith('@gmail.com')) {
    alert('Please use a Gmail address (ends with @gmail.com).');
    emailInput.focus();
    return;
  }

  successMsg.hidden = false;
});
