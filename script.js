const form = document.querySelector('form');
const formSection = document.querySelector('#form-section');
const ticketSection = document.querySelector('#ticket-section');
const fullNameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#email-address');
const githubInput = document.querySelector('#github-username');
const ticketNameInline = document.querySelector('#ticket-name-inline');
const ticketEmailInline = document.querySelector('#ticket-email-inline');
const ticketName = document.querySelector('#ticket-name');
const ticketUsername = document.querySelector('#ticket-username')
const avatarInput = document.querySelector('#avatar');
const ticketAvatar = document.querySelector('#ticket-avatar');
const ticketCode = document.querySelector('#ticket-code');


form.addEventListener('submit', function(event){
    event.preventDefault();

    const fullNameValue = fullNameInput.value;
    const emailValue = emailInput.value;
    const avatarFile = avatarInput.files[0];

    if (avatarFile) {
        const reader = new FileReader();

        reader.onload = function(){
            ticketAvatar.src = reader.result;
        };

        reader.readAsDataURL(avatarFile);
    }

    ticketNameInline.textContent = fullNameValue;
    ticketEmailInline.textContent = emailValue;
    ticketName.textContent = fullNameValue;

    let githubValue = githubInput.value;

    if (githubValue.startsWith('@')){
        githubValue = githubValue.slice(1);
    }
    
    ticketUsername.textContent = '@' + githubValue;

    const randomNumber = Math.floor(Math.random() * 99999) + 1;
    const ticketNumber = String(randomNumber).padStart(5, '0');
    ticketCode.textContent = '#' + ticketNumber;

    formSection.style.display = 'none';
    ticketSection.style.display = 'block';
});