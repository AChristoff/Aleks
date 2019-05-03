const infoService = (() => {

    function getMyCertificates() {
        return kinvey.get('appdata', `modules?query={}&sort={"date": -1}`, 'kinvey')
    }

    function getJobs() {
        return kinvey.get('appdata', `jobDescription?query={}&sort={"date": -1}`, 'kinvey')
    }

    function getCertificate(certificateID) {
        return kinvey.get('appdata', `modules/${certificateID}`, 'kinvey');
    }

    function getProjects() {
        return kinvey.get('appdata', `portfolio?query={}&sort={"order": 1}`, 'kinvey')
    }

    function getJobDescription(jobID) {
        return kinvey.get('appdata', `jobDescription/${jobID}`, 'kinvey');
    }

    function getEducation() {
        return kinvey.get('appdata', `education?query={}&sort={"date": -1}`, 'kinvey')
    }

    return {
        getMyCertificates,
        getCertificate,
        getJobDescription,
        getJobs,
        getEducation,
        getProjects,
    }

    
})();