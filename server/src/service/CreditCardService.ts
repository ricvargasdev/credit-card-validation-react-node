import { CreditCard } from "../model/CreditCard";

let creditCards: CreditCard[] = [];

/**
 * Add a new Card in the database. For the sake of this example the database is the array "creditCards"
 * @param name 
 * @param cardNumber 
 * @param limit 
 * @returns 
 */
export function addCreditCard(name: string, cardNumber: number, limit: number): CreditCard | null {
    if (!CreditCard.validateCardNumber(cardNumber)) {
        console.log("Invalid card number")
        return null;
    }
    const card = new CreditCard(name, cardNumber, limit);
    creditCards.push(card);
    return card;
}

/**
 * Retreives all the credit cards from the database (creditCards array).
 * @returns 
 */
export function getCreditCards(): CreditCard[] {
    return creditCards;
}

/**
 * Removes all the credit cards from the array.
 * This is used for testing purposes only.
 */
export function deleteAllCreditCards() {
    creditCards = []
}