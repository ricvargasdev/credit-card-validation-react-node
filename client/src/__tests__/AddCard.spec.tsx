import React from 'react';
import AddCard from '../components/AddCard';
import { create } from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react';

describe('Test for the AddCard component', () => {
  it('Renders the component', () => {
    const addCard = jest.fn();
    const component = create(<AddCard addCard={addCard} errorMessage={''} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('calls addCard function on form submit', () => {
    const addCard = jest.fn();
    const { getByLabelText, getByText } = render(<AddCard addCard={addCard} errorMessage={''} />);

    fireEvent.change(getByLabelText('Name'), { target: { value: 'James Bond' } });
    fireEvent.change(getByLabelText('Card Number'), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText('Limit'), { target: { value: '100' } });
    fireEvent.click(getByText('Add Card'));

    expect(addCard).toHaveBeenCalledWith({ name: 'James Bond', cardNumber: '1234567890', limit: '100', balance: 0 });
  });
});