// JavaScript Document
$.validator.addMethod("monthlyCheck", function (value, element) {
  var startDate = new Date($('#dateAlphaMonthly').val());
  var endDate = new Date($('#dateOmegaMonthly').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var difference = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  if (difference >= 28) {
    return true;
  } else {
    return false;
  }
});