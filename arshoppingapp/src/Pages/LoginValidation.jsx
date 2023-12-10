function Validation(Values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(Values.email_address === "") {
        error.email_address = "Email field is empty"
    }
    else if(!email_pattern.test(Values.email_address)) {
        error.email_address = "Invalid/Incorrect Email"
    } else {
        error.email_address =""
    }

    if(Values.user_pass === "") {
        error.user_pass = "Password field is empty"
    }
    else if(!password_pattern.test(Values.user_pass)) {
        error.user_pass = "Invalid/Incorrect Password"
    } else {
        error.user_pass =""
    }
    console.log(error)
    return error;
}
export default Validation