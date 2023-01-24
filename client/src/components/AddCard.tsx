import React, { useState } from 'react';
import { CreditCard } from '../models/CreditCard';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

interface Props {    
    addCard: (card: CreditCard) => void;
    errorMessage: string;
}

const AddCard = (props:Props) => {
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: 0,
        limit: 0,
        balance: 0,
    });

    const [cardNumberError, setCardNumberError] = useState('');

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (formData.cardNumber.toString().length > 19) {
            setCardNumberError("Card number should be no longer than 19 characters");
            return;
        }
        setCardNumberError('');

        const addCard = await props.addCard({
            name: formData.name,
            cardNumber: formData.cardNumber,
            limit: formData.limit,
            balance: formData.balance,
        });

        setFormData({
            name: '',
            cardNumber: 0,
            limit: 0,
            balance: 0,
        });
    };

  return (
    <>
    <Row>
        <Col md={4}>
            <h2>Add</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        aria-label="Name input"
                    />
                </Form.Group>

                <Form.Group controlId="formCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter card number" 
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={handleChange} 
                        required
                        aria-label="Card number input"
                    />
                    {cardNumberError && <Alert key={'danger'} variant={'danger'}>{cardNumberError}</Alert>}
                    {props.errorMessage && <Alert key={'danger'} variant={'danger'}>{props.errorMessage}</Alert>}
                </Form.Group>

                <Form.Group controlId="formLimit">
                    <Form.Label>Limit</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter limit" 
                        name="limit" 
                        value={formData.limit} 
                        onChange={handleChange} 
                        required
                        aria-label="Limit input"
                    />
                </Form.Group>

                <Form.Group controlId="formSubmit" style={{marginTop: 10}}>
                    <Button variant="primary" type="submit" aria-label="Add card button">
                        Add Card
                    </Button>
                </Form.Group>
            </Form>
        </Col>
    </Row>
    </>
  );
};

export default AddCard;
