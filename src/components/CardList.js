import React from 'react';
import Card from './Card';

const CardList = ({ cards}) => (
<ul>
  {
    cards.map(({_id, title, priority, status, createdBy, assignedTo}) =>
      <Card
        key={_id}
        title={title}
        priority={priority}
        status={status}
        createdBy={createdBy}
        assignedTo={assignedTo}
        />
      )
  }
  </ul>
  );

export default CardList;