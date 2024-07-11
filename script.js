function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var birthdate = document.getElementById('birthdate').value;
  var gender = document.getElementById('gender').value;
  var address = document.getElementById('address').value;

  // Simple validation
  if (firstName === '' || lastName === '' || email === '' || phone === '' || birthdate === '' || gender === '' || address === '') {
    showError('All fields are required');
    return false;
  }

  // Additional validation for phone number format
  var phoneRegex = /^[7-9]{3}[0-9]{3}[0-9]{4}$/;
  if (!phone.match(phoneRegex)) {
    showError('Please enter phone number in format: 1234567890');
    return false;
  }

  // If all validations pass
  alert('Form submitted successfully!');
  document.getElementById('registrationForm').reset(); // Optional: Reset form after submission
}

function showError(message) {
  document.getElementById('error-message').textContent = message;
}
