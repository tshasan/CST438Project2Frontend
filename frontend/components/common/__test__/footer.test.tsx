import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../footer';

describe('Footer component', () => {
    test('renders the footer with correct text', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('© 2023 Wishlist. All rights reserved.')).toBeInTheDocument();
    });

    test('has the correct class names', () => {
        const { container } = render(<Footer />);
        const footerElement = container.querySelector('footer');
        expect(footerElement).toHaveClass('bottom-0 bg-background shadow-md p-4');
    });
});