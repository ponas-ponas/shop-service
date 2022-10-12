interface Product {
  id: number,
  name: string,
  price: number,
  imageUrl?: string
}

export const products: Product[] = [
  { id: 1, name: 'Great book', price: 200 },
  { id: 2,  name: 'Good book', price: 500 },
  { id: 3,  name: 'Great book', price: 100 },
  { id: 4,  name: 'Good book', price: 250 },
  { id: 5,  name: 'Great book', price: 300 },
  { id: 6,  name: 'Good book', price: 75 },
  { id: 7,  name: 'Good book', price: 125 }
];

export const fetchProducts = () => new Promise<Product[]>(resolve => resolve(products));

export const fetchProductsById = (id: number) =>
  new Promise<Product>(resolve => resolve(products.find(product => product.id === id)));
