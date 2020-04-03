// JavaScript Document
function getMessageNone() {
  var title = $('#title').val();
  var location = $('#location').val();
  var description = $('#description').val();

  var dateAlpha = $('#dateAlpha').val().replace(/[^0-9]+/g, '') + "T" + $('#timeAlpha').val().replace(/\D/g, '') + "00";
  var dateOmega = $('#dateOmega').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmega').val().replace(/\D/g, '') + "00";

  var startDate = new Date($('#dateAlpha').val());
  var endDate = new Date($('#dateOmega').val());
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  var to = "Test to";
  var toEmail = "testemail@gmail.com";
  return ["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:${uuid()}\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmega + "\nLOCATION:" + location + "\nORGANIZER;CN=" + to + ":MAILTO::" + toEmail + "\nDESCRIPTION:" + description + "\nSUMMARY:" + title + "\nEND:VEVENT\nEND:VCALENDAR"];
}
