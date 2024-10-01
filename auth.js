// Simulated user database
const users = [];

document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        errorMessage.textContent = 'Email already registered.';
        return;
    }

    // Register the new user
    users.push({ name, email, password });
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert('Login successful! Welcome, ' + user.name);
        // Redirect to the homepage or dashboard
        // window.location.href = 'homepage.html'; // Uncomment to redirect
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});
