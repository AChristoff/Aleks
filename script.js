function attachEvents() {

    //---------------------------------- Fixed nav

    const nav = document.querySelector('#top');
    const toOfNav = nav.offsetTop;
    const navHeight = nav.offsetHeight;

    function fixNav() {
        if (window.scrollY > toOfNav + navHeight) {

            $('#top').attr('class', 'row fixed-nav');
            document.body.style.paddingTop = navHeight + 'px';

        } else {
            $('#top').attr('class', 'row');
            document.body.style.paddingTop = 0;
        }
    }

    window.addEventListener('scroll', fixNav);

    //----------------------------------

    $('#cv').on('click', () => {
        console.log('downloading CV');
    });

    $('#contacts').on('click', () => {
        console.log('contacts');
    });
}

