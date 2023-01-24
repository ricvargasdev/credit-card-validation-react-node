import axios from 'axios';
import { CreditCard } from '../models/CreditCard';

const baseUrl = 'http://localhost:3000';

/**
 * Get all the cards from the backend
 * @returns 
 */
export async function getAllCards() {
    try {
        const { data } = await axios.get(`${baseUrl}/creditcards/v1/getAll`);
        return data;
    } catch (err) {
        throw new Error(err as string);
    }
}

/**
 * Add a new card in the backend
 * @param card
 * @returns 
 */
export async function createCard(card: CreditCard) {
    try {
        const response = await axios.post(`${baseUrl}/creditcards/v1/add`, card);
        if(response.status === 400){
            console.log("Error: ", response.data.error);
            throw new Error(response.data.error);
        }
        return response.data;
    } catch (err) {
        throw err;
    }
}