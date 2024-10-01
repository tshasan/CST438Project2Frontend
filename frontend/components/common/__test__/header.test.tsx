import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../header';

describe('Header component', () => {
    test('renders the header with correct text', () => {
        const { getByText } = render(<Header />);
        expect(getByText('Wishlist')).toBeInTheDocument();
    });

    test('has the correct class names', () => {
        const { container } = render(<Header />);
        const headerElement = container.querySelector('header');
        expect(headerElement).toHaveClass('top-0 bg-background shadow-md p-4');
    });

    test('renders the container div with correct class', () => {
        const { container } = render(<Header />);
        const divElement = container.querySelector('div');
        expect(divElement).toHaveClass('container mx-auto');
    });

    test('renders the h1 element with correct class', () => {
        const { container } = render(<Header />);
        const h1Element = container.querySelector('h1');
        expect(h1Element).toHaveClass('text-xl font-bold');
    });
});