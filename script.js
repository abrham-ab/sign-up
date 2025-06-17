function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error
    errorMessage.textContent = '';

    if (!username || !email || !password) {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
