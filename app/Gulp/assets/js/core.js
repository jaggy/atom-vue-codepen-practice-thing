'use strict';

$(document).ready(function() {
  (function titleRot() {
    setInterval(function() {
      var title = $(document).find("title").text();
      title = title.substring(2, title.length-2);
      title = title[title.length-1] + title.substring(0, title.length-1);
      $(document).find("title").text('🔮' + title + '🔮');
    }, 700);
  })();
});
