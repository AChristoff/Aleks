controllers.getEducation = function (context) {

    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('./views/array/education/education.hbs')
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

controllers.getSoftUni = function (context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    if (userService.isAuth()) {

        infoService.getMyCertificates()
            .then((res) => {

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

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('./views/array/experience/experience.hbs')
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