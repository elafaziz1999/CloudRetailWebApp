function Validation(Values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(Values.f_name === "") {
        error.f_name = "First Name field is empty"
    }
    else {
        error.f_name =""
    }

    if(Values.l_name === "") {
        error.l_name = "Last Name field is empty"
    }
    else {
        error.l_name =""
    }

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
    else {
        error.user_pass =""
    }

    if(Values.dob === "") {
        error.dob = "Date of Birth field is empty"
    }
    else {
        error.dob =""
    }
    return error;
}
export default Validation