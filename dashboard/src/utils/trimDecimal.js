function trimDecimal(numberString) {
  // Split the string based on the decimal point
  const parts = numberString.split('.');

  // Return the part before the decimal point
  return parts[0];
}

export default trimDecimal;
