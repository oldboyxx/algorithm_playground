function solution(time) {

  if (/PM/.test(time)) {
    time = time.replace('PM', '')
    var hours = time.slice(0, 2)
    if (hours !== '12') hours = (parseInt(hours) + 12).toString()
    console.log(hours+time.slice(2))

  } else {
    time = time.replace('AM', '')
    var hours = time.slice(0, 2)
    if (hours === '12') hours = '00'
    console.log(hours+time.slice(2))
  }
}

module.exports = solution

/*
Given a time in AM/PM format, convert it to military (-hour) time.

Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.

Input Format

A single string containing a time in -hour clock format (i.e.:  or ), where .

Output Format

Convert and print the given time in -hour format, where .

Sample Input

07:05:45PM
Sample Output

19:05:45
*/