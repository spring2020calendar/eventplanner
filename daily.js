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

function getRecurrence(totalDays, intervals) {
return Math.ceil(totalDays.value - intervals.value);
}

// if every day is checked // if end by date is checked
if ($('input[name=everyDayRadio]:checked').val() == 'everyDay') {
  if ($('input[name=endDaily]:checked').val() == 'byDaily') {
    var message = ["Every day and by end date chosen"];
  } else if ($('input[name=endDaily]:checked').val() == 'afterDaily') {
    var message = ["Every day and end after chosen"];
  } else if ($('input[name=endDaily]:checked').val() == 'noEndDaily') {
    var message = ["Every day and no end date is chosen"];
  }
} else if ($('input[name=everyDayRadio]:checked') == 'everyWeekday') {
  if ($('input[name=endDaily]:checked').val() == 'byDaily') {
    var message = ["Every weekday and by end date chosen"];
  } else if ($('input[name=endDaily]:checked').val() == 'afterDaily') {
    var message = ["Every weekday and end after chosen"];
  } else if ($('input[name=endDaily]:checked').val() == 'noEndDaily') {
    var message = ["Every weekday and no end date is chosen"];
  }
}
