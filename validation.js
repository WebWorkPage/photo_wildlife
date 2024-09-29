const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const lastname_input = document.getElementById("lastname-input");
const email_input = document.getElementById("email-input");
const username_input = document.getElementById("username-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");

//once form submitted, this event is fired
form.addEventListener('submit', (e) => {
    let errors=[];

    if(firstname_input){  //sign up page
        errors = getSignupFormErrors(firstname_input.value, lastname_input.value, email_input.value, username_input.value, password_input.value, repeat_password_input.value);
    }
    else{   //login page
        errors = getLoginFormErrors(username_input.value, password_input.value, email_input.value);
    }

    if(errors.length > 0){
        //will prevent submitting of the form if any error
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
})

function getSignupFormErrors(firstname, lastname, email, username, password, repeatPassword){
    let errors=[];
    if(firstname === '' || firstname == null){
        errors.push("Firstname is required");
        firstname_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(lastname === '' || lastname == null){
        errors.push("Lastname is required");
        lastname_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(email === '' || email == null){
        errors.push("email is required");
        email_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(username === '' || username == null){
        errors.push("Username is required");
        username_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(password === '' || password == null){
        errors.push("Password is required");
        password_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(password.length < 8){
        errors.push("Passowrd must have atleast 8 characters");
        password_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(password != repeatPassword){
        errors.push("Password does not match repeated password");
        password_input.parentElement.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.parentElement.classList.add('incorrect');
    }

    return errors;
}

const allInputs = [firstname_input, lastname_input, email_input, username_input, password_input, repeat_password_input].filter(input => input != null);
allInputs.forEach( input => {
    input.addEventListener('input', () => {
        if( input.parentElement.parentElement.classList.contains('incorrect') ){
            input.parentElement.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
        }
    })
})

function getLoginFormErrors(username, password, email){
    let errors=[];

    if(username === '' || username == null){
        errors.push("Username is required");
        username_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(password === '' || password == null){
        errors.push("Password is required");
        password_input.parentElement.parentElement.classList.add('incorrect');
    }
    if(email === '' || email == null){
        errors.push("email is required");
        email_input.parentElement.parentElement.classList.add('incorrect');
    }

    return errors;
}