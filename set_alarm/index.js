function setAlarm(employed, vacation) {
  let result;
  employed && !vacation ? (result = true) : (result = false);
  return result;
}
