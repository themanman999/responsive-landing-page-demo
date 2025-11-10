// ===== Simple Email Capture =====
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message');

  if (!email || !email.includes('@')) {
    message.textContent = 'Please enter a valid email.';
    message.style.color = 'yellow';
    return;
  }

  // Simulate saving the email (for demo)
  message.textContent = `Grazie! ${email} has been added to our loyalty list.`;
  message.style.color = 'lightgreen';
  this.reset();
});
