function validatePassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match. Please try again.');
        password.value = '';
        confirmPassword.value = '';
        password.focus();
        return false;
    }
    return true;
}

function updateRangeValue(value) {
    document.getElementById('rangeValue').textContent = value;
}