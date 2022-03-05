let form = document.querySelector('form');
const email = document.getElementById('email');
const zipCode = document.getElementById('zip');
const country = document.getElementById('country');
const password = document.getElementById('pass');
const passConf = document.getElementById('pass_conf');

const emailErr = document.getElementById('emailErr');
const zipErr = document.getElementById('zipErr');
const countErr = document.getElementById('countErr');
const passErr = document.getElementById('passErr');

const formControls = [email, zipCode, country];
const errors = [emailErr, zipErr, countErr];
const passControls = [password, passConf];
const errTexts = ['Please fill in a valid email', 'Valid zipCode is expected', 'Valid country name is expected']
let validity;

for (let i = 0; i < formControls.length; i++){
    formControls[i].addEventListener('input', function () {
        if (formControls[i].validity.valid || formControls[i].validity.valueMissing) {
            errors[i].textContent = "";
            errors[i].className = "";
        } else {
            showInlineError(i);
        }
    })
};

for (let i = 0; i < passControls.length; i++) {
    passControls[i].addEventListener('input', () => {
        if (password.value === passConf.value) {
            passErr.textContent = "";
            passErr.className = "";
            validity = true;
        } else {
            showPassErr();
            validity = false;
        }
    });
};

form.addEventListener('submit', (Event) => {
    console.log(validity);
    if (!validity) {
        Event.preventDefault();
        // showErrMsgs();
    } else {
        Event.preventDefault();
        alert('All is good, give high five!!!')
    }
});

function showInlineError(errIndex) {
    errors[errIndex].className = 'active';
    errors[errIndex].textContent = errTexts[errIndex];
};

function showPassErr() {
    passErr.className = 'active';
    passErr.textContent = 'Entered passwords dont match. Please check passwords';
}

function showErrMsgs() {
    passControls.forEach((control) => {
       control.setCustomValidity("Passwords don't match. Please check") 
    });
    form = document.querySelector('form');
}