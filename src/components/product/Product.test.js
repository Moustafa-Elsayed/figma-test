import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  test('renders without crashing', () => {
    render(<Product />);
  });

  test('renders product title and count correctly', () => {
    const { getByText } = render(<Product />);
    const productTitle = getByText('Products');
    const productCount = getByText('( 12 )');
    expect(productTitle).toBeInTheDocument();
    expect(productCount).toBeInTheDocument();
  });

  test('renders "Add Review" button correctly', () => {
    const { getByText } = render(<Product />);
    const addReviewButton = getByText('Add Review');
    expect(addReviewButton).toBeInTheDocument();
  });
});
