// REGISTER

controllers.getRegister = function (context) {

    context.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/user/register.hbs');
    }).catch((err) => console.log(err));
};


controllers.postRegister = function (context) {
    let username = context.params.username;
    let password = context.params.password;
    let repeatPassword = context.params.repeatPassword;
    $('#registerUsername').attr('class', 'form-control');

    if (username === '') {
        $('#registerUsername').attr('class', 'form-control is-invalid');
        return notify.showError('Username is required!');
    } else if (password === '') {
        $('#registerPassword').attr('class', 'form-control is-invalid');
        return notify.showError('Password is required!');
    } else if (password !== repeatPassword) {
        $('#registerPassword').attr('class', 'form-control is-invalid');
        $('#registerRepeatPassword').attr('class', 'form-control is-invalid');
        return notify.showError('Passwords don`t match!');
    }

    userService
        .register(username, password)
        .then((res) => {
            userService.saveSession(res);
            context.redirect('#/home');
            notify.showSuccess('Registration is successful. You are now Logged in. Enjoy my website!');
        }).catch((err) => {
            notify.handleError(err);
    });
};

// LOGIN

controllers.getLogin = function (context) {
    context.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/user/login.hbs')
    }).catch((err) => console.log(err));
};

controllers.postLogin = function (context) {

    let username = context.params.username;
    let password = context.params.password;
    userService
        .login(username, password)
        .then((res) => {
            userService.saveSession(res);
            context.redirect('#/home');
            notify.showSuccess('You are now Logged in. Enjoy my website!');
        }).catch((err) => {

        let loginUsername = $('#loginUsername');
        let loginPassword = $('#loginPassword');

        if (loginUsername.val() === '') {
            loginUsername.attr('class', 'form-control is-invalid');
            return notify.showError('Username is required!');
        } else if (loginPassword.val() === '') {
            loginPassword.attr('class', 'form-control is-invalid');
            return notify.showError('Password is required!');
        }

        notify.handleError(err);
    });
};


controllers.postGuest = function (context) {

    let username = 'guest';
    let password = 'guest';
    userService
        .login(username, password)
        .then((res) => {
            userService.saveSession(res);
            context.redirect('#/home');
            notify.showSuccess("Welcome, you are granted website's full functionality!");
        }).catch((err) => {

        notify.handleError(err);
    });
};




// LOGOUT

controllers.getLogout = function (context) {
    userService
        .logout()
        .then(() => {
            sessionStorage.clear();
            context.redirect('#/home');
            notify.showSuccess('Logout successful. Thank you for visiting my website!');
        }).catch((err) => console.log(err));
};