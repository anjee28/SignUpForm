const password = document.getElementById('password');
const rePassword = document.getElementById('rePassword')
const match = document.getElementById('match');

rePassword.addEventListener('change', () => {
    if (password.value === rePassword.value) {
        match.style.visibility = 'hidden';
        password.style.outline = '2px solid #2180c0';
        rePassword.style.outline = '2px solid #2180c0';
    }
    else {
        console.log('does not match');
        match.style.visibility = 'visible';
        password.style.outline = '2px solid red';
        rePassword.style.outline = '2px solid red';
        
    }
})

password.addEventListener('change', () => {
    if (password.value === rePassword.value) {
        match.style.visibility = 'hidden';
        password.style.outline = '2px solid #2180c0';
        rePassword.style.outline = '2px solid #2180c0';
    }
    else {
        console.log('does not match');
        match.style.visibility = 'visible';
        password.style.outline = '2px solid red';
        rePassword.style.outline = '2px solid red';
        
    }
})