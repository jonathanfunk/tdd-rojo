  const regex = {
    When: /when.*/i,
    Where: /where.*/i,
    WhatTime: /what.+time.*/i,
    WhatDay: /what.+day.*/i,
    WhatAge: /what.+age.*/i,
    Who: /who.*/i,
    HowOld: /how.+old.*/i,
    YesOrNo: /^is|do|does|are|will./i,
    Favorite: /favorite.*/i,
  }

  module.exports = regex;
