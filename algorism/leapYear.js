const calLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return 1;
  }
  return 0
}


console.log(calLeapYear(2000));