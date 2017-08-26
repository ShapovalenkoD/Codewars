// My solution
function validate(password) {
    return  /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /^[A-Za-z0-9]{6,}$/.test(password)
}

// Top solution
function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}