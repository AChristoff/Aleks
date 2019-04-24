function fixNavigation() {

    const nav = document.querySelector('#top');
    const toOfNav = nav.offsetTop;
    const navHeight = nav.offsetHeight;

    function fixNav() {
        if (window.scrollY > toOfNav + navHeight) {

            $('#top').attr('class', 'fixed-nav');
            document.body.style.paddingTop = navHeight + 'px';

        } else {
            $('#top').attr('class', '');
            document.body.style.paddingTop = 0;
        }
    }

    window.addEventListener('scroll', fixNav);
}