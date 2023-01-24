export class CreditCard {
    name: string;
    cardNumber: number;
    limit: number;
    balance: number;

    constructor(name: string, cardNumber: number, limit: number) {
        if (cardNumber.toString().length > 19) {
            throw new Error("Card number should be no longer than 19 characters");
        }
        this.name = name;
        this.cardNumber = cardNumber;
        this.limit = limit;
        this.balance = 0;
    }

    static validateCardNumber(cardNumber: number): boolean {
        let sum = 0;
        let shouldDouble = false;
        let cardNumberStr = cardNumber.toString();
        for (let i = cardNumberStr.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumberStr[i]);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return (sum % 10) === 0;
    }

}