import axios from 'axios';
import { CreditCard } from '../models/CreditCard';
import * as CardService from '../services/CardService';

describe('CardService', () => {
    describe('getAllCards', () => {
        it('should return data from axios.get', async () => {
            const data = [{ name: 'James Bond', cardNumber: '1234567890', limit: 1000, balance: 0 }];
            const axiosMock = jest.spyOn(axios, 'get').mockResolvedValue({ data });
            const result = await CardService.getAllCards();

            expect(axiosMock).toHaveBeenCalledWith(`http://localhost:3000/creditcards/v1/getAll`);
            expect(result).toEqual(data);
        });
    });

    describe('createCard', () => {
        it('should return data from axios.post', async () => {
            const card: CreditCard = { name: 'James Bond', cardNumber: 1234567890, limit: 1000, balance: 0 };
            const data = { success: true };
            const axiosMock = jest.spyOn(axios, 'post').mockResolvedValue({ data });

            const result = await CardService.createCard(card);

            expect(axiosMock).toHaveBeenCalledWith(`http://localhost:3000/creditcards/v1/add`, card);
            expect(result).toEqual(data);
        });
    });
});