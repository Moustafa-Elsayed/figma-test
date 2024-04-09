/* eslint-disable react/display-name */
import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

const productData = [
  {
    id: 1,
    img: 'test-image-1.jpg',
    imgTitle: 'Live',
    title: 'Product 1',
    heart: 'heart',
    price: '100',
    daysNumber: '2',
    days: 'days',
    hoursNumber: '4',
    hours: 'hours',
    minutesNumber: '30',
    minutes: 'minutes',
  },
];

// eslint-disable-next-line @next/next/no-img-element
jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('Product component', () => {
  it('renders product data correctly', () => {
    const { getByText, getByAltText } = render(<Product />);
    productData.forEach(product => {
      expect(getByText(product.title)).toBeInTheDocument();
    });

    productData.forEach(product => {
      expect(getByAltText('logo')).toHaveAttribute('src', product.img);
    });

  });

});
