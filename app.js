// form validation
let registrationForm = document.querySelector('#form');
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if(validateForm()){
        alert('Form Submitted');
    }
    
});

let validateForm = () => {
    return (checkFirstName() & checkLastName() & checkEmail() & checkPassword());
       
};

let checkFirstName = () => {
    let inputEl = document.querySelector('#firstName');
    let inputFeedbackEl = document.querySelector('#firstName-feedback');
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};

let checkLastName = () => {
    let inputEl = document.querySelector('#lastName');
    let inputFeedbackEl = document.querySelector('#lastName-feedback');
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};

let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#email-feedback');
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};

let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};




//make valid
let makeValid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText = `${inputEl.placeholder} looks good`;
};

//make invalid
let makeInvalid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText = `${inputEl.placeholder} cannot be empty`;
};

// first name field with keyup event
let firstNameEl = document.querySelector('#firstName');
firstNameEl.addEventListener('keyup', function() {
    checkFirstName();
});

// last name field with keyup event
let lastNameEl = document.querySelector('#lastName');
lastNameEl.addEventListener('keyup', function() {
    checkLastName();
});

// email field with keyup event
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function() {
    checkEmail();
});

// password field with keyup event
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function() {
    checkPassword();
});