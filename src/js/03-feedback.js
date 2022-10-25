var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form')
const KEY_STORAGE = "feedback-form-state";
const formData = {};
form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onInputText, 500))

populateTexteria(throttle)

function onFormSubmit(evt){
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(KEY_STORAGE);

    console.log(formData)
    
}


function onInputText(evt){
    // console.log(evt.target)
    formData[evt.target.name] = evt.target.value;
    // console.log(formData)
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData))
}




function populateTexteria(){
//======================
const mail = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea')
//======================

const localParsed = JSON.parse(localStorage.getItem(KEY_STORAGE));

if(localParsed){

    mail.value = localParsed.email;
    textarea.value = localParsed.message;
}

    
}