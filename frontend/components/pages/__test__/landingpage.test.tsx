import React from 'react';
import '@testing-library/jest-dom'; 
import { render, screen, fireEvent } from '@testing-library/react';
import LandingPage from '@/components/pages/landingpage';

it('allows the user to type in the email and password fields', () => {
  render(<LandingPage />);
  
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  
  expect((emailInput as HTMLInputElement).value).toBe('test@example.com');
  expect((passwordInput as HTMLInputElement).value).toBe('password');
});

it('renders the login form', () => {
  render(<LandingPage />);
  
  const loginHeadings = screen.getAllByText('Login');
  expect(loginHeadings[0]).toBeInTheDocument(); // Check the first occurrence
  
  const emailLabel = screen.getByLabelText('Email');
  expect(emailLabel).toBeInTheDocument();
});

it('renders the placeholder image', () => {
  render(<LandingPage />);
  
  const image = screen.getByAltText('Placeholder Image');
  expect(image).toBeInTheDocument();
});