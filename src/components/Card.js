import React from 'react';

const Card = ({_id, title, priority, status, createdBy, assignedTo }) => (
  <li>
    <h3>{ title }</h3>
    <p>{ priority }</p>
    <p>{ status }</p>
    <p>{ createdBy }</p>
    <p>{ assignedTo }</p>
  </li>
);

export default Card;