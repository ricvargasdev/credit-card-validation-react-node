import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { addCreditCard, getCreditCards } from './service/CreditCardService';

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/creditcards/v1/add', (req, res) => {
    const { name, cardNumber, limit } = req.body;
    const card = addCreditCard(name, cardNumber, limit);
    if (card === null) {
        return res.status(400).send({ error: 'Invalid card number' });
    }
    res.status(201).send({ message: 'Card added successfully', card });
});

app.get('/creditcards/v1/getAll', (req, res) => {
    res.send(getCreditCards());
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});