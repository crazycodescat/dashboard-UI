/* eslint-disable no-unused-vars */
import { getRequest } from '../utils/request';

async function getBusinessLocation() {
  const res = await getRequest('/business-location', 'get');
  const data = res && res.data;

  const locationDetails = data.map((data) => {
    return {
      id: data.id,
      business_id: data.business_id,
      location_id: data.location_id,
      name: data.name,
    };
  });

  return locationDetails;
}

const locationDetails = getBusinessLocation();
console.log(locationDetails);

async function getProductStocks(product_variations) {
  const prodVariations = [];

  product_variations.forEach((prodVariation) => {
    prodVariation.variations.forEach((variation) => {
      variation.variation_location_details.forEach((varDetails) => {
        locationDetails.forEach((lcDetail, idx) => {
          if (varDetails.location_id === lcDetail.id) {
            const [first, second] = getLocationNameAbbreviation(lcDetail.name);
            const stock = trimDecimal(varDetails.qty_available);
            const stockWithName = first + second + stock;
            prodVariations.push(stockWithName);
          }
        });
      });
    });
  });
  return prodVariations;
}

function getLocationNameAbbreviation(name) {
  // Split the name based on whitespace
  let parts = name.split(/\s+/);

  // Initialize variables to store abbreviations
  let firstAbbreviation = '';
  let secondAbbreviation = '';

  if (parts.length >= 2) {
    // Take the first part and get the first 3 letters (or fewer if the name is shorter)
    firstAbbreviation = parts[0].substring(0, 3).toLowerCase(); // Using toLowerCase to match the output 'cit'

    // Take the part at index 1 (second part) and get the first 3 letters (or fewer if the name is shorter)
    secondAbbreviation = parts[1].substring(0, 3).toLowerCase(); // Using toLowerCase to match the output 'cen'
  }

  return [firstAbbreviation, secondAbbreviation];
}

function trimDecimal(numberString) {
  // Split the string based on the decimal point
  const parts = numberString.split('.');

  // Return the part before the decimal point
  return parts[0];
}

export { getProductStocks };
