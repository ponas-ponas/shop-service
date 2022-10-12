import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { fetchProductsById } from 'src/mocks/products';


const productsById: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  const id = Number(event.pathParameters.id);
  const product = await fetchProductsById(id);
  return formatJSONResponse({
    product,
  });
};

export const main = middyfy(productsById);
