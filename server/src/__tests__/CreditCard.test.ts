import { CreditCard } from "../model/CreditCard";

describe('CreditCard', () => {
    it('should create a new credit card', () => {
        const card = new CreditCard('John Doe', 1111222233334444, 1000);
        expect(card).toEqual({ name: 'John Doe', cardNumber: 1111222233334444, limit: 1000, balance: 0 });
    });

    it('should throw an error if card number is too long', () => {
        expect(() => new CreditCard('John Doe', 11112222333344445555, 1000)).toThrow();
    });

    it('should validate a valid card number', () => {
        expect(CreditCard.validateCardNumber(1111222233334444)).toBe(true);
    });

    it('should invalidate an invalid card number', () => {
        expect(CreditCard.validateCardNumber(1234567812345679)).toBe(false);
    });
});
