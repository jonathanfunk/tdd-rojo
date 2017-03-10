const regex = require('./questionHelper')

const question = text => {

  if (text.indexOf('?') !== -1) {

    if (regex.WhatTime.test(text) && regex.WhatDay.test(text))
      return "1:00 pm Friday!";

    if (regex.When.test(text) || regex.WhatTime.test(text))
      return "1:00 pm!";

    if (regex.Where.test(text) && regex.Favorite.test(text))
      return "My favorite place is Puerto Vallarta!";

    if (regex.Where.test(text))
      return "At my house!";

    if (regex.WhatDay.test(text))
      return "Friday!";

    if (regex.Who.test(text) && regex.Favorite.test(text))
      return "Elvis is my favorite.";

    if (regex.Who.test(text))
      return "Jim is who.";

    if (regex.HowOld.test(text) || regex.WhatAge.test(text))
      return "22 years young.";

    if (regex.YesOrNo.test(text))
      return "Yes!";

  }
  return "This is not a question!"
}

module.exports = question;
