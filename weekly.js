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