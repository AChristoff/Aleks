const controllers = {};

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
        this.get('#/register', controllers.getRegister);
        this.post('#/register', controllers.postRegister);

        // login routes
        this.get('#/login', controllers.getLogin);
        this.post('#/login', controllers.postLogin);

        // logout rout
        this.get('#/logout', controllers.getLogout);

        // education rout
        this.get('#/education', controllers.getEducation);
        this.get('#/softuni', controllers.getSoftUni);
        this.get('#/details/:id', controllers.getCertificateDetails);
    });
    app.run('#/home');
});
