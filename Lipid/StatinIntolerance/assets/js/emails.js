function sendEmail(emails) {
  var timeout = 2000;
  var mailtoPrefix = 'mailto:?bcc=';
  var maxUrlCharacters = 1900;
  var separator = ';';
  var currentIndex = 0;
  var nextIndex = 0;

  if (emails.length < maxUrlCharacters) {
    window.location = mailtoPrefix + email;
    return;
  }

  do {
    currentIndex = nextIndex;
    nextIndex = email.indexOf(separator, currentIndex + 1);
  } while (nextIndex != -1 && nextIndex < maxUrlCharacters)

  if (currentIndex == -1) {
    window.location = mailtoPrefix + email;
  } else {
    window.location = mailtoPrefix + email.slice(0, currentIndex);
    setTimeout(function () {
      sendEmail(email.slice(currentIndex + 1));
    }, timeout);
  }
}