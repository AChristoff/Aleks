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

function showJobInfo(job) {

    let jobInfoClosed = $(`.${job}-closed`);
    let jobInfoOpen = $(`.${job}-open`);

    if (!jobInfoOpen.is(':visible')) {
        jobInfoOpen.css('display', 'block');
        jobInfoClosed.css('display', 'none');
    } else {
        jobInfoOpen.css('display', 'none');
        jobInfoClosed.css('display', 'block');
    }

}

let goTop = function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function barAnimation () {
    let skills = $('.skills');
    let bar = $('.progress-bar-striped');

    skills.on('mouseover', () => {
        bar.attr('class', 'progress-bar progress-bar-striped progress-bar-animated')
    });

    skills.on('mouseout', () => {
        bar.attr('class', 'progress-bar progress-bar-striped')
    });
}




