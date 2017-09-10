// My solution
function validPhoneNumber(phoneNumber){
    return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phoneNumber)
}

// Top solution
function validPhoneNumber(phoneNumber){
    return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}