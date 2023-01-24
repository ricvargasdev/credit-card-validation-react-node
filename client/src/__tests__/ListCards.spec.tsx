import React from 'react';
import ListCards from '../components/ListCards';
import { render } from '@testing-library/react';
import { CreditCard } from '../models/CreditCard';
import '@testing-library/jest-dom/extend-expect';

describe('ListCards component', () => {
    it('renders a table with the correct data', () => {
        const cards: CreditCard[] = [
            { name: 'John Doe', cardNumber: 1234567890, limit: 1000, balance: 0 },
            { name: 'Jane Smith', cardNumber: 1234567891, limit: 2000, balance: 500 }
        ];

        const { getByText } = render(<ListCards cards={cards} />);

        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('1234567890')).toBeInTheDocument();
        expect(getByText('£0')).toBeInTheDocument();
        expect(getByText('£1000')).toBeInTheDocument();

        expect(getByText('Jane Smith')).toBeInTheDocument();
        expect(getByText('1234567891')).toBeInTheDocument();
        expect(getByText('£500')).toBeInTheDocument();
        expect(getByText('£2000')).toBeInTheDocument();
    });
});