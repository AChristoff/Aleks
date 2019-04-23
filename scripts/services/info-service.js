const infoService = (() => {

    function getMyCertificates() {
        return kinvey.get('appdata', `modules?query={}&sort={"date": -1}`, 'kinvey')
    }


    function getGenre(genre) {
        return kinvey.get('appdata', `movies?query={"genres":{"$regex":"^.*${genre}.*"}}`, 'kinvey')
    }

    function createMovie(movieObj) {
        return kinvey.post('appdata', 'movies', 'kinvey', movieObj);
    }

    function removeMovie(movieID) {
        return kinvey.remove('appdata', `movies/${movieID}`, 'kinvey');
    }

    function editMovie(movieID, updatedMovieObj) {
        return kinvey.update('appdata', `movies/${movieID}`, 'kinvey', updatedMovieObj)
    }

    function getMovie(movieID) {
        return kinvey.get('appdata', `movies/${movieID}`, 'kinvey');
    }

    // function sortMovies(movie) {
    //
    //     let sortedMovies = movie.sort((a, b) => {
    //         return b.tickets - a.tickets
    //     });
    //
    //     return sortedMovies;
    // }

    return {
        getMyCertificates,
        getGenre,
        createMovie,
        removeMovie,
        editMovie,
        getMovie,
        //sortMovies,
    }

    
})();