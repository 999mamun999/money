const loginButton = document. querySelector('.login-btn');
const  errorMessage = document. querySelector('.error-txt');


loginButton.addEventListener('click', function(){

    let userName = document.querySelector('.log-user').value 
    let userPass = document. querySelector('.log-pass').value


    if(userName === 'admin' && userPass === 'admin'){
        window.location.href = 'http://127.0.0.1:5500/next.html';
    }else{
        document.querySelector('.error-txt').innerHTML= 'Please enter your Username and Password'
    }
})
// console.log(window.location)
