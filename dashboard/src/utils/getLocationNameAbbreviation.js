function getLocationNameAbbreviation(name) {
  console.log('hello');
  // Split the name based on whitespace
  let parts = name.split(/\s+/);

  // Initialize variables to store abbreviations
  let firstAbbreviation = '';
  let secondAbbreviation = '';

  if (parts.length >= 2) {
    // Take the first part and get the first 3 letters (or fewer if the name is shorter)
    firstAbbreviation = parts[0].substring(0, 2).toLowerCase(); // Using toLowerCase to match the output 'cit'

    // Take the part at index 1 (second part) and get the first 3 letters (or fewer if the name is shorter)
    secondAbbreviation = parts[1].substring(0, 2).toLowerCase(); // Using toLowerCase to match the output 'cen'
  }

  return [firstAbbreviation, secondAbbreviation];
}

export default getLocationNameAbbreviation;
