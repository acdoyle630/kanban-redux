import React from 'react';
import Card from './Card';

const CardList = ( {cards} ) => (

<ul>
  {
    cards.map((card) =>
      <Card card={card}
        key={card.id}
        />
      ) }
  </ul>
  );

export default CardList;