import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {

  it('should render Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('should render Payment link', () => {
    render(<App />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });
  
  it('should render Home link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: "Home" })).toBeInTheDocument();
  });

  it('should render the Home headr', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

})
