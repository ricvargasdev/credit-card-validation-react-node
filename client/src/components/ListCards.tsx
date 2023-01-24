import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { CreditCard } from '../models/CreditCard';

const ListCards = (props: { cards: CreditCard[]; }) => {

    return (
        <Row>
            <h2>Existing Cards</h2>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Card Number</th>
                            <th>Balance</th>
                            <th>Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cards.map((card) => (
                            <tr key={card.cardNumber.toString()}>
                                <td>{card.name.toString()}</td>
                                <td>{card.cardNumber.toString()}</td>
                                <td>£{card.balance.toString()}</td>
                                <td>£{card.limit.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default ListCards;
