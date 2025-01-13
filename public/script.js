document.getElementById('toggle-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});   // dynamic dom manipulation based on user interactions
      // through id, making pw visible and hide by checked and unchecked the box

function validateForm() {   // ensures all the required fields with its strength and shows error msg
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
    const passwordStrength = document.getElementById("password-strength");
    
    errorMessage.textContent = "";
    passwordStrength.textContent = "";

    if (password.length < 8) {
        passwordStrength.textContent = "Password must be at least 8 characters.";
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        passwordStrength.textContent = "Password must include an uppercase letter.";
        return false;
    }
    if (!/[a-z]/.test(password)) {
        passwordStrength.textContent = "Password must include a lowercase letter.";
        return false;
    }
    if (!/[0-9]/.test(password)) {
        passwordStrength.textContent = "Password must include a number.";
        return false;
    }
    if (!/[\W_]/.test(password)) {
        passwordStrength.textContent = "Password must include a special character.";
        return false;
    }

    if (!name || !email || !phone) {
        errorMessage.textContent = "All required fields must be filled!";
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage.textContent = "Invalid email format!";
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        errorMessage.textContent = "Phone number must be 10 digits!";
        return false;
    }
    return true;
}

// dynamic dom updates to route to the thank you page
function handleFormSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        navigate('/thankyou');
    }
}

// client side routing
function navigate(path) {
    history.pushState(null, null, path);
    renderPage(path);
}

function renderPage(path) {
    if (path === '/thankyou') {
        document.body.innerHTML = `<h1>Thank You!</h1><p>Your form has been submitted.</p>
        <a href="/" onclick="navigate('/'); return false;">Go back</a>`;
    } else {
        location.reload();
    }
}

window.addEventListener('popstate', function() {
    renderPage(location.pathname);
});
