// JavaScript Document
// start date cannot occur in past
$.validator.addMethod("currentAlpha", function (value, element) {
  var curDate = new Date();
  var startDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    startDate = new Date($('#dateAlpha').val());
    startDate = new Date($('#dateAlpha').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    startDate = new Date($('#dateAlphaDaily').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    startDate = new Date($('#dateAlphaWeekly').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    startDate = new Date($('#dateAlphaMonthly').val());
    if (startDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
});

// end date cannot occur in past
$.validator.addMethod("currentOmega", function (value, element) {
  var curDate = new Date();
  var endDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    endDate = new Date($('#dateOmega').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    endDate = new Date($('#dateOmegaDaily').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    endDate = new Date($('#dateOmegaWeekly').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    endDate = new Date($('#dateOmegaMonthly').val());
    if (endDate < curDate) {
      return false;
    } else {
      return true;
    }
  }
});

// start date cannot occur after end date
$.validator.addMethod("minAlpha", function (value, element) {
  var startDate;
  var endDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    startDate = new Date($('#dateAlpha').val());
    endDate = new Date($('#dateOmega').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    startDate = new Date($('#dateAlphaDaily').val());
    endDate = new Date($('#dateOmegaDaily').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    startDate = new Date($('#dateAlphaWeekly').val());
    endDate = new Date($('#dateOmegaWeekly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    startDate = new Date($('#dateAlphaMonthly').val());
    endDate = new Date($('#dateOmegaMonthly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  }
});

//end date cannot occur before start date
$.validator.addMethod("minOmega", function (value, element) {
  var startDate;
  var endDate;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    startDate = new Date($('#dateAlpha').val());
    endDate = new Date($('#dateOmega').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    startDate = new Date($('#dateAlphaDaily').val());
    endDate = new Date($('#dateOmegaDaily').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    startDate = new Date($('#dateAlphaWeekly').val());
    endDate = new Date($('#dateOmegaWeekly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    startDate = new Date($('#dateAlphaMonthly').val());
    endDate = new Date($('#dateOmegaMonthly').val());
    if (endDate < startDate) {
      return false;
    } else {
      return true;
    }
  }
});

$.validator.addMethod("timeTest", function (value, element) {
  var startDate;
  var endDate;
  var startTime;
  var endTime;
  if ($('input[name=recurrence]:checked').val() == 'none') {
    startDate = $('input[name=dateAlpha]').val();
    endDate = $('input[name=dateOmega]').val();
    startTime = $('input[name=timeAlpha]').val();
    endTime = $('input[name=timeOmega]').val();
    // if the start date is after the end date
    if (startDate > endDate) {
      return false;
    }
    if (startDate < endDate) {
      return true;
    }
    if (startDate == null) {
      return true;
    }
    if (endDate == null) {
      return true;
    }
    // if the start date and end date are the same -- and end time is before the start time
    else if (startDate == endDate && endTime < startTime) {
      return false;
    } else if (startDate == endDate && endTime > startTime) {
      return true;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'daily') {
    startDate = $('input[name=dateAlphaDaily]').val();
    endDate = $('input[name=dateOmegaDaily]').val();
    startTime = $('input[name=timeAlphaDaily]').val();
    endTime = $('input[name=timeOmegaDaily]').val();
    // if the start date is after the end date
    if (startDate == null) {
      return true;
    }
    if (endDate == null) {
      return true;
    }
    // if the start date and end date are the same -- and end time is before the start time
    else if (endTime > startTime) {
      return true;
    } else if (endTime < startTime) {
      return false;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'weekly') {
    startDate = $('input[name=dateAlphaWeekly]').val();
    endDate = $('input[name=dateOmegaWeekly]').val();
    startTime = $('input[name=timeAlphaWeekly]').val();
    endTime = $('input[name=timeOmegaWeekly]').val();
    if (startDate == null) {
      return true;
    }
    if (endDate == null) {
      return true;
    }
    // if the start date and end date are the same -- and end time is before the start time
    else if (endTime > startTime) {
      return true;
    } else if (endTime < startTime) {
      return false;
    }
  } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
    startDate = $('input[name=dateAlphaMonthly]').val();
    endDate = $('input[name=dateOmegaMonthly]').val();
    startTime = $('input[name=timeAlphaMonthly]').val();
    endTime = $('input[name=timeOmegaMonthly]').val();
    // if the start date is after the end date
    if (startDate > endDate) {
      return false;
    }
    if (startDate < endDate) {
      return true;
    }
    if (startDate == null) {
      return true;
    }
    if (endDate == null) {
      return true;
    }
    // if the start date and end date are the same -- and end time is before the start time
    else if (startDate == endDate && endTime < startTime) {
      return false;
    } else if (startDate == endDate && endTime > startTime) {
      return true;
    }
  }
});

$(function () {
  $("form[name='newics']").validate({
    groups: {
      date1: "dateAlpha dateOmega",
      date2: "dateAlphaDaily dateOmegaDaily",
      date3: "dateAlphaWeekly dateOmegaWeekly",
      date4: "dateAlphaMonthly dateOmegaMonthly",
      time1: "timeAlpha timeOmega",
      time2: "timeAlphaDaily timeOmegaDaily",
      time3: "timeAlphaWeekly timeOmegaWeekly",
      time4: "timeAlphaMonthly timeOmegaMonthly",
    },
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      title: {
        required: true,
        minlength: 1, // <- here
        maxlength: 50
      },
      location: {
        required: true,
        minlength: 1, // <- here
        maxlength: 50
      },
      recurrence: {
        required: true
      },
      everyDayRadio: {
        required: true
      },
      endDaily: {
        required: true,
      },
      dateAlpha: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: true
      },
      dateAlphaDaily: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: {
          depends: function () {
            return $('input[name=endDaily]:checked').val() == 'byDaily';
          }
        }
      },
      dateAlphaWeekly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: {
          depends: function () {
            return $('input[name=endWeekly]:checked').val() == 'byWeekly';
          }
        }
      },
      dateAlphaMonthly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentAlpha: true,
        minAlpha: {
          depends: function () {
            return $('input[name=endMonthly]:checked').val() == 'byMonthly';
          }
        }
      },
      everyDay: {
        required: {
          depends: function () {
            return $('input[name=everyDayRadio]:checked').val() == 'customDaily';
          }
        },
        integerCheckEveryDay: {
          depends: function () {
            return $('input[name=everyDayRadio]:checked').val() == 'customDaily';
          }
        }
      },
      dailyCount: {
        required: {
          depends: function () {
            return $('input[name=endDaily]:checked').val() == 'afterDaily';
          }
        },
        integerCheckDailyCount: {
          depends: function () {
            return $('input[name=endDaily]:checked').val() == 'afterDaily';
          }
        }
      },
      everyWeek: {
        required: true,
        integerCheckEveryWeek: true
      },
      dayName: {
        required: true
      },
      weeklyCount: {
        required: {
          depends: function () {
            return $('input[name=endWeekly]:checked').val() == 'afterWeekly';
          }
        },
        integerCheckWeeklyCount: {
          depends: function () {
            return $('input[name=endWeekly]:checked').val() == 'afterWeekly';
          }
        }
      },
      dateOmega: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true
      },
      dateOmegaDaily: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true,
        dailyCheck: true
      },
      dateOmegaWeekly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true,
        weeklyCheck: true
      },
      dateOmegaMonthly: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        date: true,
        currentOmega: true,
        minOmega: true,
        monthlyCheck: true
      },
      timeAlpha: {
        required: true,
        timeTest: true,
        minAlpha: true
      },
      timeAlphaDaily: {
        required: true,
        timeTest: true,
        minAlpha: true
      },
      timeAlphaWeekly: {
        required: true,
        timeTest: true,
        minAlpha: true
      },
      timeAlphaMonthly: {
        required: true,
        timeTest: true,
        minAlpha: true
      },
      timeOmega: {
        required: true,
        timeTest: true,
        minOmega: true
      },
      timeOmegaDaily: {
        required: true,
        timeTest: true,
        minOmega: true
      },
      timeOmegaWeekly: {
        required: true,
        timeTest: true,
        minOmega: true
      },
      timeOmegaMonthly: {
        required: true,
        timeTest: true,
        minOmega: true
      },
    },
    // Specify validation error messages
    messages: {
      title: "Title is required.",
      location: "Location is required.",
      recurrence: {
        required: "Recurrence is required."
      },
      everyDayRadio: {
        required: "Type of daily recurrence required."
      },
      endDaily: {
        required: "Type of end date required."
      },
      dateAlpha: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateAlphaDaily: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateAlphaWeekly: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      dateAlphaMonthly: {
        required: "Start and end date is required.",
        currentAlpha: "Start date occurs in the past.",
        minAlpha: "Start date occurs after end date."
      },
      everyDay: {
        required: "Daily recurrence required.",
        integerCheckEveryDay: "Input must be an integer greater than 0."
      },
      dailyCount: {
        required: "End after number is required.",
        integerCheckDailyCount: "Input must be an integer greater than 0."
      },
      everyWeek: {
        required: "Weekly recurrence required.",
        integerCheckEveryWeek: "Input must be an integer greater than 0."
      },
      dayName: {
        required: "Day(s) of week are required."
      },
      weeklyCount: {
        required: "End after number is required.",
        integerCheckWeeklyCount: "Input must be an integer greater than 0."
      },
      dateOmega: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
      },
      dateOmegaDaily: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
        dailyCheck: "End date must be at least one day after start date.",
      },
      dateOmegaWeekly: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
        weeklyCheck: "End date must be at least one week after start date."
      },
      dateOmegaMonthly: {
        required: "Start and end date is required.",
        currentOmega: "End date occurs in the past.",
        minOmega: "End date occurs before start date.",
        monthlyCheck: "End date must be at least month day after start date."
      },
      timeAlpha: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minAlpha: "Start time occurs after end time."
      },
      timeAlphaDaily: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minAlpha: "Start time occurs after end time."
      },
      timeAlphaWeekly: {
        required: "Start and end time required.",

        timeTest: "Start time occurs at or after end time.",
        minAlpha: "Start time occurs after end time."
      },
      timeAlphaMonthly: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minAlpha: "Start time occurs after end time."
      },
      timeOmega: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minOmega: "End time occurs before start time."
      },
      timeOmegaDaily: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minOmega: "End time occurs before start time."
      },
      timeOmegaWeekly: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minOmega: "End time occurs before start time."
      },
      timeOmegaMonthly: {
        required: "Start and end time required.",
        timeTest: "Start time occurs at or after end time.",
        minOmega: "End time occurs before start time."
      },
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents('.container'));
      } else { // This is the default behavior 
        error.insertAfter(element);
      }
    }
  });
});


$(function () {
  $("form[name='newics']").submit(function () {
    if ($(this).valid()) {
      var title = $('#title').val();
      var location = $('#location').val();
      var description = $('#description').val();

      if ($('input[name=recurrence]:checked').val() == 'none') {

        var message = getMessageNone();
        window.open("data:text/calendar;charset=utf8," + escape(message));

      } else if ($('input[name=recurrence]:checked').val() == 'daily') {
        if ($('input[name=everyDayRadio]:checked').val() == 'customDaily') {
          if ($('input[name=endDaily]:checked').val() == 'byDaily') {

            var message = getMessageByDaily();
            window.open("data:text/calendar;charset=utf8," + escape(message));

          } else if ($('input[name=endDaily]:checked').val() == 'afterDaily') {

            var message = getMessageAfterDaily();
            window.open("data:text/calendar;charset=utf8," + escape(message));

          } else if ($('input[name=endDaily]:checked').val() == 'noEndDaily') {

            var message = getMessageNoEndDaily();
            window.open("data:text/calendar;charset=utf8," + escape(message));

          }
        } else if ($('input[name=everyDayRadio]:checked').val() == 'everyWeekday') {
          if ($('input[name=endDaily]:checked').val() == 'byDaily') {

            var message = getMessageWeekdayByDaily();
            window.open("data:text/calendar;charset=utf8," + escape(message));

          } else if ($('input[name=endDaily]:checked').val() == 'afterDaily') {

            var message = getMessageWeekdayAfterDaily();
            window.open("data:text/calendar;charset=utf8," + escape(message));

          } else if ($('input[name=endDaily]:checked').val() == 'noEndDaily') {

            var message = getMessageWeekdayNoEndDaily();
            window.open("data:text/calendar;charset=utf8," + escape(message));

          }
        }
      } else if ($('input[name=recurrence]:checked').val() == 'weekly') {

        if ($('input[name=endWeekly]:checked').val() == 'byWeekly') {

          var message = getMessageByWeekly();
          window.open("data:text/calendar;charset=utf8," + escape(message));

        } else if ($('input[name=endWeekly]:checked').val() == 'afterWeekly') {

          var message = getMessageAfterWeekly();
          window.open("data:text/calendar;charset=utf8," + escape(message));

        } else if ($('input[name=endWeekly]:checked').val() == 'noEndWeekly') {

          var message = getMessageNoEndWeekly();
          window.open("data:text/calendar;charset=utf8," + escape(message));

        }

      } else if ($('input[name=recurrence]:checked').val() == 'monthly') {
        var dateOmegaWeekly = $('#dateAlpha').val().replace(/[^0-9]+/g, '') + "T" + $('#timeOmega').val().replace(/\D/g, '') + "00";
        var count = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
        var start = new Date($('#dateAlpha').val());
        var dayofWeek;

        if (startDate.getDay() == 0) {
          dayofWeek = "MO";
          count = Math.ceil((count) / 28);
        } else if (startDate.getDay() == 1) {
          dayofWeek = "TU";
          count = Math.ceil((count + 1) / 28);
        } else if (startDate.getDay() == 2) {
          dayofWeek = "WE";
          count = Math.floor((count + 2) / 28);
        } else if (startDate.getDay() == 3) {
          dayofWeek = "TH";
          count = Math.ceil((count + 3) / 28);
        } else if (startDate.getDay() == 4) {
          dayofWeek = "FR";
          count = Math.ceil((count + 4) / 28);
        } else if (startDate.getDay() == 5) {
          dayofWeek = "SA";
          count = Math.ceil((count + 5) / 28);
        } else if (startDate.getDay() == 6) {
          dayofWeek = "SU";
          count = Math.ceil((count + 6) / 28);
        }

        var message = ["BEGIN:VCALENDAR\nPRODID:-//Microsoft Corporation//Outlook 16.0 MIMEDIR//EN\nVERSION:2.0\nMETHOD:PUBLISH\nX-MS-OLK-FORCEINSPECTOROPEN:TRUE\nBEGIN:VTIMEZONE\nTZID:Hawaiian Standard Time\nBEGIN:STANDARD\nTZOFFSETFROM:-1000\nTZOFFSETTO:-1000\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nCLASS:PUBLIC\nDESCRIPTION:" + description + "\nDTEND;TZID='Hawaiian Standard Time':" + dateOmegaWeekly + "\nDTSTART;TZID='Hawaiian Standard Time':" + dateAlpha + "\nLOCATION:" + location + "\nPRIORITY:5" + "\nRRULE:FREQ=MONTHLY;COUNT=" + count + ";BYDAY=" + dayofWeek + "\nSEQUENCE:0\nSUMMARY;LANGUAGE=en-us:" + title + "\nUID:\nX-MICROSOFT-CDO-BUSYSTATUS:BUSY\nX-MICROSOFT-CDO-IMPORTANCE:1\nEND:VEVENT\nEND:VCALENDAR"];

        window.open("data:text/calendar;charset=utf8," + escape(message));
      }
    }
  });
});
