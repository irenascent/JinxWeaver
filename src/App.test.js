// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders JinxWeaver title', () => {
    render(<App />);
    const titleElement = screen.getByText(/JinxWeaver/i);
    expect(titleElement).toBeInTheDocument();
});
