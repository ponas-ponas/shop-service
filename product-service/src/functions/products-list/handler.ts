import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { fetchProducts } from 'src/mocks/products';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
  const products = await fetchProducts();

  return formatJSONResponse({
    products
  });
};

export const main = middyfy(getProductsList);
