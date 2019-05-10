let notify = (() => {

  $(document).on({

    ajaxStart: () => {
      $('#loadingBox span').text('Loading...');
      $('#loadingBox').show()
    },
    ajaxStop: () => {
      $('#loadingBox span').text('Loading...');
      $('#loadingBox').fadeOut()
    }
  });
  function showSuccess (message) {
    let infoBox = $('#infoBox');
    infoBox.find('span').text(message);
    infoBox.fadeIn();
    setTimeout(() => infoBox.fadeOut(), 4500)
  }

  function showError(message) {
    let errorBox = $('#errorBox');
    errorBox.find('span').text(message);
    errorBox.fadeIn();
    setTimeout(() => errorBox.fadeOut(), 3500)
  }

  function handleError (reason) {
    showError(reason.responseJSON.description)
  }

  return {
    showSuccess,
    showError,
    handleError
  }
})();
