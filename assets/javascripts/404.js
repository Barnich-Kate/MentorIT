document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        window.location.href = '404.html';
    });


});


document.addEventListener('DOMContentLoaded', function () {

    const signup = document.getElementById('register-form');
    signup.addEventListener('submit', function (event) {

        event.preventDefault();

        window.location.href = '404.html';
    });
});
