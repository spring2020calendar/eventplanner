// JavaScript Document
function endRadioButtonDaily() {
    if ($("input[name=endDaily]:checked").val() == "byDaily") {
        $("#dateOmegaDaily").attr("disabled", false);
        $("#dailyCount").attr("disabled", true);
    } else if ($("input[name=endDaily]:checked").val() == "afterDaily") {
        $("#dateOmegaDaily").attr("disabled", true);
        $("#dailyCount").attr("disabled", false);
    } else if ($("input[name=endDaily]:checked").val() == "noEndDaily") {
        $("#dateOmegaDaily").attr("disabled", true);
        $("#dailyCount").attr("disabled", true);
    } else {
        $("#dateOmegaDaily").attr("disabled", true);
        $("#dailyCount").attr("disabled", true);
	}
}
function endRadioButtonWeekly() {
    if ($("input[name=endWeekly]:checked").val() == "byWeekly") {
        $("#dateOmegaWeekly").attr("disabled", false);
        $("#weeklyCount").attr("disabled", true);
    } else if ($("input[name=endWeekly]:checked").val() == "afterWeekly") {
        $("#dateOmegaWeekly").attr("disabled", true);
        $("#weeklyCount").attr("disabled", false);
    } else if ($("input[name=endWeekly]:checked").val() == "noEndWeekly") {
        $("#dateOmegaWeekly").attr("disabled", true);
        $("#weeklyCount").attr("disabled", true);
    } else {
        $("#dateOmegaWeekly").attr("disabled", true);
        $("#weeklyCount").attr("disabled", true);
	}
}
function endRadioButtonMonthy() {
    if ($("input[name=endMonthly]:checked").val() == "byMonthly") {
        $("#dateOmegaMonthly").attr("disabled", false);
        $("#monthlyCount").attr("disabled", true);
    } else if ($("input[name=endMonthly]:checked").val() == "afterMonthly") {
        $("#dateOmegaMonthly").attr("disabled", true);
        $("#monthlyCount").attr("disabled", false);
    } else if ($("input[name=endMonthly]:checked").val() == "noEndMonthly") {
        $("#dateOmegaMonthly").attr("disabled", true);
        $("#monthlyCount").attr("disabled", true);
    } else {
        $("#dateOmegaMonthly").attr("disabled", true);
        $("#monthlyCount").attr("disabled", true);
	}
}

function everyRadioButtonDaily() {
    if ($("input[name=everyDayRadio]:checked").val() == "customDaily") {
        $("#everyDay").attr("disabled", false);
    } else if ($("input[name=everyDayRadio]:checked").val() == "everyWeekday") {
        $("#everyDay").attr("disabled", true);
    } else {
        $("#everyDay").attr("disabled", true);
	}
}

function dayTimeButtonMonthly() {
    if ($("input[name=endMonthly]:checked").val() == "chooseDayMonthly") {
        $("#dayMonthly").attr("disabled", false);
        $("#everyMonth").attr("disabled", false);
        $("#monthMonthly").attr("disabled", true);
        $("#weekDayMonthly").attr("disabled", true);
        $("#toEveryMonth").attr("disabled", true);
    } else if ($("input[name=endMonthly]:checked").val() == "chooseToMonthly") {
        $("#dayMonthly").attr("disabled", true);
        $("#everyMonth").attr("disabled", true);
        $("#monthMonthly").attr("disabled", false);
        $("#weekDayMonthly").attr("disabled", false);
        $("#toEveryMonth").attr("disabled", false);
    } else {
        $("#dayMonthly").attr("disabled", true);
        $("#everyMonth").attr("disabled", true);
        $("#monthMonthly").attr("disabled", true);
        $("#weekDayMonthly").attr("disabled", true);
        $("#toEveryMonth").attr("disabled", true);
	}
}