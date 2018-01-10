/*
Given a year, return the century it is in.

The first century spans from the year 1 up to and including the year 100,
the second - from the year 101 up to and including the year 200, etc.

Let's see some examples:

centuryFromYear(1705) // returns 18
centuryFromYear(1900) // returns 19
centuryFromYear(1601) // returns 17
centuryFromYear(2000) // returns 20
Hope you enjoy it .. Awaiting for Best Practice Codes hahaha ..

Enjoy Learning !!!
 */

// mine answer
function century(year) {
    if (year / 100 < 0) { // 1-99
        return 1;
    }
    if (year % 100 === 0) { // xx00
        return year / 100;
    } else {
        return parseInt(year / 100) + 1;
    }
}

// best practices
function century_best(year) {
    return (year + 99) / 100 | 0;
}