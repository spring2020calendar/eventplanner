// JavaScript Document
$.validator.addMethod("dailyCheck", function (value, element) {
  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var difference = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  if (difference >= 1) {
    return true;
  } else {
    return false;
  }
});

$.validator.addMethod("integerCheckEveryDay", function (value, element) {
  var x = document.forms["newics"]["everyDay"].value;
  var num = document.getElementById('everyDay');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("integerCheckDailyCount", function (value, element) {
  var x = document.forms["newics"]["dailyCount"].value;
  var num = document.getElementById('dailyCount');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

function getMessageByDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var count;
  var interval = parseInt(document.getElementById('everyDay').value, 10);

  if (interval == 1) {
    count = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
    return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];

  } else {
    var tempCount = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
    if (interval % 2 == 0) {
      count = Math.ceil(Math.ceil(timeDiff / MILLISECONDS_PER_DAY) / interval) + 1;
    }
    if (interval % 2 == 1) {
      count = Math.ceil(Math.ceil(timeDiff / MILLISECONDS_PER_DAY) / interval);
    }
    return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + ";INTERVAL=" + interval + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageAfterDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var count = parseInt(document.getElementById('dailyCount').value, 10);
  var interval = parseInt(document.getElementById('everyDay').value, 10);

  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + ";INTERVAL=" + interval + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function getMessageNoEndDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var interval = parseInt(document.getElementById('everyDay').value, 10);

  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;INTERVAL=" + interval + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function weekdaysBetween(startDate, endDate) {
      var s = startDate;
      var e = endDate;
	
   var diffDays = Math.floor((e - s) / 86400000);
   var weeksBetween = Math.floor(diffDays / 7);
   if (s.getDay() == e.getDay()) {
      var adjust = 0;
   } else if (s.getDay() == 0 && e.getDay() == 6) {
      var adjust = 5;
   } else if (s.getDay() == 6 && e.getDay() == 0) {
      var adjust = 0;
   } else if (e.getDay() == 6 || e.getDay() == 0) {
      var adjust = 5-s.getDay();
   } else if (s.getDay() == 0 || s.getDay() == 6) {
      var adjust = e.getDay();
   } else if (e.getDay() > s.getDay() ) {
      var adjust = e.getDay()-s.getDay();
   } else {
      var adjust = 5+e.getDay()-s.getDay();
   }
   return (weeksBetween * 5) + adjust;
}

function getMessageWeekdayByDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var tempCount = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var count = weekdaysBetween(startDate, endDate);
	
  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + ";BYDAY=MO,TU,WE,TH,FR\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function getMessageWeekdayAfterDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var tempCount = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var count = parseInt(document.getElementById('dailyCount').value, 10);

  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;COUNT=" + count + ";BYDAY=MO,TU,WE,TH,FR\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}

function getMessageWeekdayNoEndDaily() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaDaily').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaDaily').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaDaily').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaDaily').val());
  var endDate = new Date($('#dateOmegaDaily').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var interval = parseInt(document.getElementById('everyDay').value, 10);

  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR\nORGANIZER;CN=\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}
