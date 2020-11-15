const controllers = {};

window.onload = function() {
       const particles = {
      "fpsLimit": 60,
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#333333", // particles-color
          "animation": {
            "enable": true,
            "speed": 20,
            "sync": true
          }
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 3,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "links": {
          "enable": true,
          "distance": 160,
          "color": "#333333", // links-color
          "opacity": 0.3,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5, // particles-speed
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 0.8
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "background": {
        "color": "#ffffff", // background-color
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      }
    };
  
    tsParticles.load('tsparticles', particles);
};

$(() => {
    const app = Sammy('#root', function () {
        // load Handlebars
        this.use('Handlebars', 'hbs');

        // home routes
        this.get('index.html', controllers.getHome);
        this.get('#/home', controllers.getHome);
        this.get('#', controllers.getHome);
        this.get('/', controllers.getHome);

        // register routes
        // this.get('#/register', controllers.getRegister);
        // this.post('#/register', controllers.postRegister);

        // login routes
        // this.get('#/login', controllers.getLogin);
        // this.post('#/login', controllers.postLogin);

        // guest rout
        this.post('#/guest', controllers.postGuest);

        // logout rout
        // this.get('#/logout', controllers.getLogout);

        // education rout
        this.get('#/education', controllers.getEducation);
        // this.get('#/softuni', controllers.getSoftUni);
        // this.get('#/details/:id', controllers.getCertificateDetails);
        // this.get('#/ltu', controllers.getLtu);

        // about rout
        this.get('#/about', controllers.getAbout);

        // portfolio rout
        this.get('#/portfolio', controllers.getPortfolio);

        //contacts rout
        this.get('#/contacts', controllers.getContacts);
        // this.get('#/message', controllers.getMessage);

        //experience rout
        this.get('#/experience', controllers.getExperience);
        // this.get('#/job-description/:id', controllers.getJobDescription);

        this.notFound = function(verb, path) {
            this.runRoute('get', '#/404');
        };

        this.get('#/404', controllers.getNotFound);

    });
    app.run();

});
