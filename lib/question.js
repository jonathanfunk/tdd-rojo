const question = text => {
  const regexWhen = /when.*/i;
  const regexWhere = /where.*/i;
  const regexWhatTime = /what.+time.*/i;
  const regexWhatDay = /what.+day.*/i;
  const regexWho = /who.*/i;
  const regexHowOld = /how.+old.*/i;
  const regexWhatAge = /what.+age.*/i;
  const regexYesOrNo = /^is|do|does|are|will./i;
  const regexWhoFavorite = /who.+favorite./i;


  if (text.indexOf('?') !== -1) {

    if (regexWhatTime.test(text) && regexWhatDay.test(text))
      return "1:00 pm Friday!";

    if (regexWhen.test(text) || regexWhatTime.test(text))
      return "1:00 pm!";

    if (regexWhere.test(text))
      return "At my house!";

    if (regexWhatDay.test(text))
      return "Friday!";

    if (regexWhoFavorite.test(text))
      return "Elvis is my favorite.";

    if (regexWho.test(text))
      return "Jim is who.";

    if (regexHowOld.test(text) || regexWhatAge.test(text))
      return "22 years young.";

    if (regexYesOrNo.test(text))
      return "Yes!";

  }
  return "This is not a question!"
}

module.exports = question;
