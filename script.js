// Show role selection after Login or Sign-up button is clicked
function showForm(action) {
    document.getElementById('role-selection').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';

    // Store the selected action (login or signup)
    if (action === 'login') {
        window.selectedAction = 'login';
    } else {
        window.selectedAction = 'signup';
    }
}

// Show login or sign-up form based on role and previous selection
function showLoginForm(role) {
    document.getElementById('role-selection').style.display = 'none';
    if (window.selectedAction === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('form-title').textContent = role === 'patient' ? 'Patient Login' : 'Hospital Administrator Login';
    } else if (window.selectedAction === 'signup') {
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('form-title-signup').textContent = role === 'patient' ? 'Patient Sign-up' : 'Hospital Administrator Sign-up';
    }
}

// Handle form submissions for login and sign-up
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Logged in successfully!');
};

document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Signed up successfully!');
};