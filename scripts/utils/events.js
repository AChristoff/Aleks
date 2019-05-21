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

//making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

//binary
    let binary = "1011010101010101010110101011101101011101001011";
//converting the string into an array of single characters
    binary = binary.split("");

    let font_size = 12;
    let columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
    let drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++)
        drops[x] = 0;

//drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#dbe2e7"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (let i = 0; i < drops.length; i++) {
            //a random chinese character to print
            let text = binary[Math.floor(Math.random() * binary.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (c.height && Math.random() > 0.925)
                drops[i] = 0;

            //incrementing Y coordinate
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
        }, 5000);
    });

}


async function getWeather() {

    let api = 'http://api.openweathermap.org/data/2.5/weather?q=';
    let location = 'Sofia,Bulgaria';
    let units = '&units=metric';
    let apiKey = '&APPID=a22b522511b96109ac3c718b5d0675b6';

    try {

        let result = await $.ajax({
            url: api + location + units + apiKey,
            method: 'GET'
        });

        let description = result.weather[0].description;
        description = description[0].toUpperCase() + description.slice(1).toLowerCase();

        let temp = result.main.temp;
        temp = temp.toFixed(0) + " °C";
        let icon = result.weather[0].icon;


        $('#temp').text(`${temp}`);
        $('#img').attr('src', `http://openweathermap.org/img/w/${icon}.png`);
        $('#description').text(`${description}`)

    } catch (err) {
        console.log('OpenWeatherMap Error');
    }
}







