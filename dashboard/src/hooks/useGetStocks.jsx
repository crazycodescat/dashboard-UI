import getLocationNameAbbreviation from '../utils/getLocationNameAbbreviation';
import trimDecimal from '../utils/trimDecimal';
import useLocationContext from '../hooks/useLocationContext';

const useGetStocks = () => {
  const { locations } = useLocationContext();

  function getProductStocks(product_variations) {
    const prodStocks = [];

    const variationLocationDetails =
      product_variations[0].variations[0].variation_location_details;
    if (variationLocationDetails.length === 0) {
      return 'No Stock';
    }

    variationLocationDetails.length > 0 &&
      variationLocationDetails.forEach((varLocaDetail) => {
        locations &&
          locations.forEach((locationDetail) => {
            if (varLocaDetail.location_id === locationDetail.id) {
              const [first, second] = getLocationNameAbbreviation(
                locationDetail.name
              );
              const stock = trimDecimal(varLocaDetail.qty_available);
              const stockWithName = `${first}  ${second} : ${stock}`;
              prodStocks.push({
                locationName: `${locationDetail.name}: ${stock},`,
                stockWithName,
              });
            }
          });
      });

    return prodStocks;
  }
  return { getProductStocks };
};

export default useGetStocks;
