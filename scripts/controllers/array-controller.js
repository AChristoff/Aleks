controllers.getEducation = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        infoService.getEducation()
            .then((res) => {
                context.educations = res;

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    education: './views/array/education/universities.hbs',
                }).then(function () {
                    this.partial('./views/array/education/education.hbs')
                });
            })

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};

controllers.getSoftUni = function (context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        infoService.getMyCertificates()
            .then((res) => {
                console.log(res);
                context.certificates = res;

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    certificate: './views/array/education/certificate.hbs',
                }).then(function () {
                    this.partial('./views/array/education/softuni.hbs')
                });
            })

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};

controllers.getCertificateDetails = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let certificateID = context.params.id;
    if (userService.isAuth()) {

        infoService.getCertificate(certificateID)
            .then((res) => {

                context._id = certificateID;
                context.ltu = res.ltu;
                console.log(context.ltu);
                context.module = res.module;
                context.description = res.description;
                context.firstUrl = res.url[0];
                context.secondUrl = res.url[1];

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                }).then(function () {
                    this.partial('./views/array/education/certificateDetails.hbs')
                });
            })

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};


controllers.getLtu = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        infoService.getMyCertificates()
            .then((res) => {
                console.log(res);
                context.certificates = res;

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    certificate: './views/array/education/certificate.hbs',
                }).then(function () {
                    this.partial('./views/array/education/ltu.hbs')
                });
            })

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};

controllers.getContacts = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('./views/array/contacts/contacts.hbs')
        });

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};

controllers.getExperience =  function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        infoService.getJobs()
            .then((res) => {
                console.log(res);
                context.jobs = res;

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    job: './views/array/experience/jobs.hbs',
                }).then(function () {
                    this.partial('./views/array/experience/experience.hbs')
                });
            })

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};



controllers.getJobDescription =  function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let jobID = context.params.id;

    infoService.getJobs()
        .then((res) => {
          context.jobs = res;
        });

    if (userService.isAuth()) {

        infoService.getJobDescription(jobID)
            .then((res) => {
                context.res = res;
                console.log(res);
                context.vid = res.vid;
                context.years = res.years;
                context.title = res.title;
                context.period = res.period;
                context.department = res.department;
                context.responsibilities = res.responsibilities;


                context._id = jobID;
                context.company = res.company;

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                }).then(function () {
                    this.partial('./views/array/experience/jobDescription.hbs')
                });
            })

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};


controllers.getPortfolio = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        infoService.getProjects()
            .then((res) => {
                console.log(res);
                context.projects = res;

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    project: './views/array/portfolio/project.hbs',
                }).then(function () {
                    this.partial('./views/array/portfolio/portfolio.hbs')
                });
            })

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }
};

controllers.getAbout = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('./views/array/about/about.hbs')
        });

    } else {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/common/permissions.hbs')
        }).catch(err => console.log(err))
    }

};