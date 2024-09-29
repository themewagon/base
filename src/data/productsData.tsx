import iPhone from 'assets/images/products/iPhone.png';
import Nike from 'assets/images/products/Nike.png';

export interface ProductsDataProps {
  id: number | string;
  image: string;
  title: string;
  price: string;
  rating: number;
  link: string;
}

export const productsData: ProductsDataProps[] = [
  {
    id: 1,
    image: Nike,
    title: 'NIKE Shoes Black Pattern',
    price: '$87',
    rating: 4,
    link: '#!',
  },
  {
    id: 2,
    image: iPhone,
    title: 'iPhone 12',
    price: '$987',
    rating: 4,
    link: '#!',
  },
];
