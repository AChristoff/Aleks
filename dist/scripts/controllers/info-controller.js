controllers.getCertificates = function (context) {

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
                    certificate: './views/array/certificate.hbs',
                }).then(function () {
                    this.partial('./views/array/education.hbs')
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