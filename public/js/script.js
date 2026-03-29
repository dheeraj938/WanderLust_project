
(() => {
  'use strict';

 
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated')
    }, false)
  });
})();

// ==================== LOGIN PAGE INTERACTIVITY ====================

// Password Toggle Functionality
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', function() {
    // Toggle password visibility
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle active class on icon
    this.classList.toggle('active');
    
    // Change icon
    if (type === 'password') {
      this.classList.remove('fa-eye-slash');
      this.classList.add('fa-eye');
    } else {
      this.classList.remove('fa-eye');
      this.classList.add('fa-eye-slash');
    }
  });

  // Add input focus animation
  const inputs = document.querySelectorAll('.form-control-custom');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
}


