import React, { useState, useEffect } from 'react';
import AddCard from './components/AddCard';
import ListCards from './components/ListCards';
import { getAllCards, createCard } from './services/CardService';
import { CreditCard } from './models/CreditCard';
import './App.css';

const App = () => {
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getAllCards()
      .then((data) => setCards(data))
      .catch((error) => console.error(error));
  }, []);

  /**
   * Calls the endpoint to add a new Card
   * @param card 
   */
  const addCard = async (card: CreditCard) => {
    try {
      const newCard = await createCard(card);
      setCards((prevCards) => [...prevCards, newCard.card]);
      setErrorMessage('');
    } catch (error:any) {
      const errorMessage = error?.response.data.error as string;
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div>
      <AddCard addCard={addCard} errorMessage={errorMessage} />
      <ListCards cards={cards} />
    </div>
  );
};

export default App;