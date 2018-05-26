"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstWeekDay = 0;
var getStartDate = function (date) {
    var startDate = new Date(date.getTime());
    while (startDate.getDay() !== firstWeekDay) {
        startDate.setDate(startDate.getDate() - 1);
    }
    return startDate;
};
var getDateOrZero = function (month) { return function (date) { return date.getMonth() === month ? date.getDate() : 0; }; };
var setWeek = function (year) { return function (month) { return function (weeks) { return function (date) {
    var week = [];
    for (var i = 0; i < 7; i++) {
        week.push(getDateOrZero(month)(date));
        date = new Date(date.getTime());
        date.setDate(date.getDate() + 1);
    }
    weeks.push(week);
    if ((date.getMonth() <= month) && (date.getFullYear() === year))
        setWeek(year)(month)(weeks)(date);
}; }; }; };
exports.default = (function (year, actualMonth) {
    var month = actualMonth - 1;
    if ((year < 1970) || (month < 0) || (month > 11))
        return;
    var weeks = [];
    var date = getStartDate(new Date(year, month, 1));
    setWeek(year)(month)(weeks)(date);
    return weeks;
});
