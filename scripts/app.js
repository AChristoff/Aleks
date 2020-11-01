const controllers = {};

window.onload = function() {
    Particles.init({
      selector: '#background',
      connectParticles: true,
      maxParticles: 140,
      color: '#808080',
    });
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
