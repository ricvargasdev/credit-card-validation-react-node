import { addCreditCard, getCreditCards, deleteAllCreditCards } from '../service/CreditCardService';
import { CreditCard } from '../model/CreditCard';

describe('CreditCardService', () => {
    it('should add a credit card', () => {
        const card = addCreditCard('John Doe', 1111222233334444, 1000);
        expect(card).toEqual({ name: 'John Doe', cardNumber: 1111222233334444, limit: 1000, balance: 0 });
    });

    it('should not add a credit card with an invalid card number', () => {
        const card = addCreditCard('John Doe', 123, 1000);
        expect(card).toBeNull();
    });

});

describe('getCreditCards', () => {
    beforeEach(() => {
        deleteAllCreditCards();
    });

    it('should return an empty array when there are no cards', () => {
        expect(getCreditCards()).toEqual([]);
    });

    it('should return an array of credit cards', () => {
        const card1 = new CreditCard('John Doe', 1111222233334444, 1000);
        const card2 = new CreditCard('Jane Smith', 0, 2000);
        addCreditCard(card1.name, card1.cardNumber, card1.limit);
        addCreditCard(card2.name, card2.cardNumber, card2.limit);

        expect(getCreditCards()).toEqual([card1, card2]);
    });
});
