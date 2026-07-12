document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous messages and errors
    clearErrors();
    
    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.querySelector('input[name="remember"]').checked;
    const messageDiv = document.getElementById('message');
    
    // Validate email
    if (!email) {
        showError('emailError', 'Email is required');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        return;
    }
    
    // Validate password
    if (!password) {
        showError('passwordError', 'Password is required');
        return;
    }
    
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        return;
    }
    
    // Simulate login (in real app, you'd send to server)
    messageDiv.textContent = 'Logging in...';
    messageDiv.className = 'message';
    
    // Simulate API call delay
    setTimeout(() => {
        messageDiv.textContent = `✓ Login successful! Welcome, ${email}${rememberMe ? ' (Remember me enabled)' : ''}`;
        messageDiv.className = 'message success';
        
        // Clear form
        document.getElementById('loginForm').reset();
        
        // In a real application, you would redirect to dashboard here
        // window.location.href = '/dashboard';
    }, 1000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = 'message';
}

// Clear errors when user starts typing
document.getElementById('email').addEventListener('input', function() {
    if (this.value.trim()) {
        document.getElementById('emailError').textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value.trim()) {
        document.getElementById('passwordError').textContent = '';
    }
});
