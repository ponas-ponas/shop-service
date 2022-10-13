interface Product {
  id: string,
  name: string,
  price: number,
  description: string;
  imageUrl?: string
}

export const products: Product[] = [
  { id: '1', name: 'Great book', description: 'Great novel ever', price: 200 },
  { id: '2',  name: 'Good book', description: 'Something intersting', price: 500 },
  { id: '3',  name: 'Great book', description: 'Wow such a book', price: 100 },
  { id: '4',  name: 'Good book', description: 'Amazing characters!!', price: 250 },
  { id: '5',  name: 'Great book', description: 'Don\'t miss this book, it\'s good', price: 300 },
  { id: '6',  name: 'Good book', description: 'Like it', price: 75 },
  { id: '7',  name: 'Good book', description: 'read it', price: 125 }
];

export const fetchProducts = () => new Promise<Product[]>(resolve => resolve(products));

export const fetchProductsById = (id: number) =>
  new Promise<Product>(resolve => resolve(products.find(product => product.id === id)));
