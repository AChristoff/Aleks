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

function emailValidation() {
    let sendBtn = $('#sendBtn');
    let email = $('#inputEmail');
    let message = $('#inputMessage');

    email.on('keyup', () => {
        if (email.val() !== '') {
            email.attr('class', 'form-control');
        }
    });

    message.on('keyup', () => {
        if (message.val() !== '') {
            message.attr('class', 'form-control');
        }
    });

    sendBtn.on('click', () => {
        if (email.val() === '') {
            email.attr('class', 'form-control is-invalid');
            notify.showError('Email is required')
        } else if (message.val() === '') {
            message.attr('class', 'form-control is-invalid');
            notify.showError('Message is required')
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

function barAnimation() {
    let skills = $('.skills');
    let bar = $('.progress-bar-striped');

    skills.on('mouseover', () => {
        bar.attr('class', 'progress-bar progress-bar-striped progress-bar-animated')
    });

    skills.on('mouseout', () => {
        bar.attr('class', 'progress-bar progress-bar-striped')
    });
}

function m3x() {
    let c = document.getElementById("c");
    let ctx = c.getContext("2d");

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    let binary = "1011010101010101010110101011101101011101001011";
    setTimeout(() => {
        binary = "⯌⯎✀✖✩✧✯✔✶*✎✤⯏⛏"
    },1200);

    binary = binary.split("");

    let font_size = 12;
    let columns = c.width / font_size;

    let drops = [];

    for (let x = 0; x < columns; x++)
        drops[x] = 0;


    function draw() {

        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#dbe2e7";
        ctx.font = font_size + "px arial";

        for (let i = 0; i < drops.length; i++) {

            let text = binary[Math.floor(Math.random() * binary.length)];

            ctx.fillText(text, i * font_size, drops[i] * font_size);

            if (c.height && Math.random() > 0.925)
                drops[i] = 0;

            drops[i]++;
        }
    }

    return setInterval(draw, 80);
}


function loadingPage() {
    $(document).ready(function () {
        $("#root").fadeIn(4000);
        setTimeout(function () {
            $("#notifications").fadeIn(1000);
        }, 4000);
    });

}


async function getWeather() {

    let baseUrl = 'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';
    let location = '51097';
    let apiKey = '?apikey=rCkwX8hea9lbhN4EKi7kf9HXiu0SWTWZ';
    let details = '&details=true';
    let units = '&metric=true'
    let URL = baseUrl + location + apiKey + details + units;

    try {

        let result = await $.ajax({
            url: URL,
            method: 'GET'
        });


        let description = result[0].IconPhrase;

        let temp = result[0].Temperature.Value;
        temp = temp + " °C";

        let icon = result[0].WeatherIcon;

        if (icon < 10) {
            icon = icon.toString().padStart(2, '0')
        }

        $('#temp').text(`${temp}`);
        $('#img').attr('src', `https://developer.accuweather.com/sites/default/files/${icon}-s.png`);
        $('#description').text(`${description}`)

    } catch (err) {
        console.log('weather error');
    }
}

let sourceSwap = function () {
    let greyImg = $(this).attr('src');
    let colorImg = $(this).data('alt-src');

    $(this).data('alt-src', greyImg);
    $(this).attr('src', colorImg);
};

let changeImg = function() {
    $('img.enlarge-B').hover(sourceSwap, sourceSwap);
};








