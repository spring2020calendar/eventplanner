// JavaScript Document
$.validator.addMethod("weeklyCheck", function (value, element) {
  var startDate = new Date($('#dateAlphaWeekly').val());
  var endDate = new Date($('#dateOmegaWeekly').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var difference = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  if (difference >= 7) {
    return true;
  } else {
    return false;
  }
});


$.validator.addMethod("integerCheckEveryWeek", function (value, element) {
  var x = document.forms["newics"]["everyWeek"].value;
  var num = document.getElementById('everyWeek');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

$.validator.addMethod("integerCheckWeeklyCount", function (value, element) {
  var x = document.forms["newics"]["weeklyCount"].value;
  var num = document.getElementById('weeklyCount');
  if (isNaN(x)) {
    return false;
  } else if (num.value > 0) {
    return true;
  }
});

function countCertainDays(days, d0, d1) {
  var ndays = 1 + Math.round((d1 - d0) / (24 * 3600 * 1000));
  var sum = function (a, b) {
    return a + Math.floor((ndays + (d0.getDay() + 6 - b) % 7) / 7);
  };
  return days.reduce(sum, 0);
}

function getDaysOfWeekIntArray() {
  var checked = []
  $("input[name='dayName[]']:checked").each(function () {
    checked.push(parseInt($(this).val()));
  });
  return checked.sort((a, b) => a - b);
}

function getDaysOfWeekNameArray() {
  var checked = []
  $("input[name='dayName[]']:checked").each(function () {
    checked.push($(this).attr("id"));
  });
  return checked;
}

function countCertainDays(days, startDate, endDate) {
  var ndays = 1 + Math.round((endDate - startDate) / (24 * 3600 * 1000));
  var sum = function (a, b) {
    return a + Math.floor((ndays + (startDate.getDay() + 6 - b) % 7) / 7);
  };
  return days.reduce(sum, 0);
}

function getMessageByWeekly() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var dateAlpha = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaWeekly').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaWeekly').val().replace(/\D/g, '') + "00";

  var daysInt = getDaysOfWeekIntArray();
  var daysName = getDaysOfWeekNameArray();
  var interval = parseInt(document.getElementById('everyWeek').value, 10);

  var startDate = new Date($('#dateAlphaWeekly').val());
  var endDate = new Date($('#dateOmegaWeekly').val());

  var count;

  if (interval == 1) {
    count = countCertainDays(daysInt, startDate, endDate);
    return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";BYDAY=" + daysName + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];


  } else {
    count = Math.ceil(countCertainDays(daysInt, startDate, endDate) / interval);
    return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + daysName + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day];
}

function setSecondDate() {
  var currentDate = new Date($("#dateAlphaWeekly").val());
  var daysInt = getDaysOfWeekIntArray();
  var a = daysInt.concat();
  var days = document.getElementById("weeklyCount").value;
  days = parseInt(days);
  var daysToCount = 0;
  daysToCount = parseInt(daysToCount);

  while (daysToCount < days) {
    for (var i = 0; i < a.length; i++) {
      currentDateDay = currentDate.getDay();
      if (currentDateDay === a[i]) {
        daysToCount++;
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate;
}

function getMessageAfterWeekly() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();

  var to = "Test to";
  var toEmail = "testemail@gmail.com";


  var interval = parseInt(document.getElementById('everyWeek').value, 10);
  if (interval == 1) {
	  
  var dateAlpha = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '');
  var count = parseInt(document.getElementById('weeklyCount').value, 10);

  var daysName = getDaysOfWeekNameArray();

  var tempDate = setSecondDate();
  var tempDateOmega = formatDate(tempDate);
  var tempDateOmega2 = tempDateOmega.toString();
  var dateOmega = tempDateOmega2.replace(/,/g, "");
	  
    return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;VALUE=DATE:" + dateAlpha + "\nDTEND;VALUE=DATE:" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";BYDAY=" + daysName + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  } else {
  var count = parseInt(document.getElementById('weeklyCount').value, 10);
	    var dateAlpha = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaWeekly').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaWeekly').val().replace(/\D/g, '') + "00";

  var daysInt = getDaysOfWeekIntArray();
  var daysName = getDaysOfWeekNameArray();
  var interval = parseInt(document.getElementById('everyWeek').value, 10);
	  
	  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=WEEKLY;COUNT=" + count + ";INTERVAL=" + interval + ";BYDAY=" + daysName + ";WKST=SU\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
  }
}

function getMessageNoEndWeekly() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();
  var dateAlpha = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlphaWeekly').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateAlphaWeekly').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmegaWeekly').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlphaWeekly').val());
  var endDate = new Date($('#dateOmegaWeekly').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = "Test to";
  var toEmail = "testemail@gmail.com";

  var interval = parseInt(document.getElementById('everyDay').value, 10);

  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nRRULE:FREQ=DAILY;INTERVAL=" + interval + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}
