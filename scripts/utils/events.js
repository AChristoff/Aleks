function registerValidation() {
    let regUsername = $('#registerUsername');
    let regPassword = $('#registerPassword');
    let regPasswordRepeat = $('#registerRepeatPassword');

    regUsername.on('keyup', () => {
        if (regUsername.val() !== '') {
            regUsername.attr('class', 'form-control');
        }
    });

    regPassword.on('keyup', () => {

        if (regPassword.attr('class', 'form-control is-invalid')
            && regPasswordRepeat.val() === '') {
            regPassword.attr('class', 'form-control')
        }

        if (regPasswordRepeat.val() !== '') {
            if (regPassword.val() === regPasswordRepeat.val()) {
                regPassword.attr('class', 'form-control is-valid');
                regPasswordRepeat.attr('class', 'form-control is-valid');
            } else {
                regPassword.attr('class', 'form-control is-invalid');
                regPasswordRepeat.attr('class', 'form-control is-invalid');
            }
        }
    });

    regPasswordRepeat.on('keyup', () => {
        if (regPassword.val() === regPasswordRepeat.val()) {
            regPassword.attr('class', 'form-control is-valid');
            regPasswordRepeat.attr('class', 'form-control is-valid');
        } else {
            regPassword.attr('class', 'form-control is-invalid');
            regPasswordRepeat.attr('class', 'form-control is-invalid');
        }
    });
}

function loginValidation() {
    let logUsername = $('#loginUsername');
    let logPassword = $('#loginPassword');

    logUsername.on('keyup', () => {
        if (logUsername.val() !== '') {
            logUsername.attr('class', 'form-control');
        }
    });

    logPassword.on('keyup', () => {
        if (logPassword.val() !== '') {
            logPassword.attr('class', 'form-control');
        }
    });
}

function showCertificates() {

    let showBtn = $('#showCertificates');
    showBtn.on('click', () => {
        let certificates = $('div#certificates');
        if (!certificates.is(':visible')) {
            certificates.css('display', 'flex');
            showBtn.text('Hide certificates');
        } else {
            certificates.css('display', 'none');
            showBtn.text('Show certificates');
        }
    });
}

function fixedNavbar() {

    const nav = document.querySelector('#top');
    const toOfNav = nav.offsetTop;
    const navHeight = nav.offsetHeight;

    function fixNav() {
        if (window.scrollY > toOfNav + navHeight) {

            $('#top').attr('class', 'row fixed-nav');
            document.body.style.paddingTop = navHeight + 'px';

        } else {
            $('#top').attr('class', 'row');
            document.body.style.paddingTop = 0;
        }
    }

    window.addEventListener('scroll', fixNav);
}
