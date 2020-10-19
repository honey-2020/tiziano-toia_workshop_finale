// tutorial from https://www.youtube.com/watch?v=rsd4FNGTRBw

const form = document.getElementById('form');
const username = document.getElementById('username');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit',(e) =>{
    // e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const subjectValue = subject.value.trim();



    if(usernameValue === ''){
        setErrorFor(username, 'Il nome non può essere vuoto');
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email non può essere vuota');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email non valida');
    } else if(emailValue.length <= 5){
        setErrorFor(email, 'Email cannot be less than 5 chars');
    } else{
        setSuccessFor(email);
    }
    if(subjectValue === ''){
        setErrorFor(subject, `L'oggetto non può essere vuoto`);
    } else{
        setSuccessFor(subject);
    }

    if(messageValue === ''){
        setErrorFor(message, 'Il messaggio non può essere vuoto');
    } else{
        setSuccessFor(message);
    }
    
    if(usernameValue === '' && emailValue === '' && subjectValue === '' && messageValue === ''){
        swal({
            icon: "error",
            text: "Non hai completato tutti i campi!",
            button: "Ok, capito!",
            timer: 2000,
            // 2000 come variabile che si ripete così come swal
        });
    } else if(usernameValue !== '' && emailValue !== '' && subjectValue !== '' && messageValue !== '') {
        swal({
            icon: "success",
            text: "Hai completato tutti i campi con successo!",
            button: "Ok, grazie!",
            timer: 2000,
        });
    } else if(usernameValue == '' || emailValue == '' || subjectValue == '' || messageValue == ''){
        swal({
            icon: "error",
            text: "Non hai completato alcuni campi!",
            button: "Ok, capito!",
            timer: 2000,
        });
        // swal("error", "Non hai completato alcuni campi!", "Ok, ho capito", 2000)
    } else{}
    
}

// const swal = (icon, text, button, timer) => {
//     swal({
//         icon,
//         text,
//         button,
//         timer, 
//     });  
// }

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';

    
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



