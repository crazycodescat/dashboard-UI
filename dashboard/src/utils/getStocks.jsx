function getProductStocks(product_variations) {
  // console.log(product_variations);
  const prodVariations = [];

  product_variations.forEach((prodVariation) => {
    prodVariation.variations.forEach((variation) => {
      if (!variation.variation_location_details.length > 0) {
        prodVariations.push('stock detail not available');
      }
      variation.variation_location_details.forEach((varDetails) => {
        prodVariations.push(trimDecimal(varDetails.qty_available));
      });
    });
  });
  return prodVariations;
}

function trimDecimal(numberString) {
  // Split the string based on the decimal point
  const parts = numberString.split('.');

  // Return the part before the decimal point
  return parts[0];
}

export { getProductStocks };
