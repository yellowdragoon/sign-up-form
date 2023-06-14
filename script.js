const passwordInput = document.querySelector('input#password');
const confirmPasswordInput = document.querySelector('input#confirm-password');

confirmPasswordInput.addEventListener('change', () => {
    if(passwordInput.value !== confirmPasswordInput.value){
        confirmPasswordInput.setCustomValidity('Oops, the passwords don\'t match!');
    }
    else{
        confirmPasswordInput.setCustomValidity('');
    }
});