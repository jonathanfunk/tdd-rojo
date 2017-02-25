// const question = {
//   containsQuestionMark: text => text.indexOf('?') !== -1,
//   containsWhat: text => /.*what.*/i.test(text),
//   containsWhere: text => /.*where.*/i.test(text),
//   containsWhen: text => /.*when.*/i.test(text),
//   containsWhy: text => /.*why.*/i.test(text),
//   containsHow: text => /.*how.*/i.test(text),
//   containsWho: text => /.*who.*/i.test(text),
//   containsYesOrNo: text => /^is|do|does|are|will./i.test(text),
//   containsCapitalization: text => /^[A-Z][a-z0-9_-]{3,19}$/.test(text),
// }

const question = text => {
  const regexWhen = /when.*/i;
  const regexWhere = /where.*/i;
  const regexWhatTime = /what.+time.*/i;
  const regexWhatDay = /what.+day.*/i;
  const regexWho = /who.*/i;
  const regexHowOld = /how.+old.*/i;
  const regexWhatAge = /what.+age.*/i;

  if (text.indexOf('?') !== -1) {
    if (regexWhere.test(text) && regexWhatDay.test(text) && (regexWhatTime.test(text) || regexWhen.test(text)))
      return "At my house 1:00 pm Friday!";

    if (regexWhatTime.test(text) && regexWhatDay.test(text))
      return "1:00 pm Friday!";

    if (regexWhen.test(text) || regexWhatTime.test(text))
      return "1:00 pm!";
      
    if (regexWhere.test(text) || regexWhatTime.test(text))
      return "At my house!";

    if (regexWhatDay.test(text))
      return "Friday!";

    if (regexWho.test(text))
      return "Jim is who.";

    if (regexHowOld.test(text) || regexWhatAge.test(text))
      return "22 years young.";

  }
  return "This is not a question!"
}

module.exports = question;
