import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

jest.mock('@/components/common/debugroute', () => () => <div>DebugRoute Component</div>);
jest.mock('@/components/pages/landingpage', () => () => <div>LandingPage Component</div>);
jest.mock('@/components/common/header', () => ({
    Header: () => <div>Header Component</div>,
}));
jest.mock('@/components/common/footer', () => ({
    Footer: () => <div>Footer Component</div>,
}));

describe('Home Page', () => {
    test('renders Header, LandingPage, and Footer components', () => {
        render(<Home />);

        expect(screen.getByText('Header Component')).toBeInTheDocument();
        expect(screen.getByText('LandingPage Component')).toBeInTheDocument();
        expect(screen.getByText('Footer Component')).toBeInTheDocument();
    });

    test('Header component renders correctly', () => {
        render(<Home />);
        const headerElement = screen.getByText('Header Component');
        expect(headerElement).toBeInTheDocument();
    });

    test('LandingPage component renders correctly', () => {
        render(<Home />);
        const landingPageElement = screen.getByText('LandingPage Component');
        expect(landingPageElement).toBeInTheDocument();
    });

    test('Footer component renders correctly', () => {
        render(<Home />);
        const footerElement = screen.getByText('Footer Component');
        expect(footerElement).toBeInTheDocument();
    });

});