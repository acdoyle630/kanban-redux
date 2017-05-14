/*jshint esversion: 6*/

const cardsFromFakeDB = [{
    _id : 1,
    title : 'Get a new tire',
    priority : 'High',
    status : 'In Progress',
    createdBy : 'Adam',
    assignedTo : 'Adam',
  },
  {
   _id : 2,
    title : 'Laundry',
    priority : 'Medium',
    status : 'Queue',
    createdBy : 'Adam',
    assignedTo : 'Kat'
  },
  {
   _id : 3,
    title : 'Dishes',
    priority : 'Low',
    status : 'Complete',
    createdBy : 'Adam',
    assignedTo : 'Matt'
  }
];

export const getCardsFromFakeXHR = () => new Promise ((resolve, reject) => {
  setTimeout(() => resolve(cardsFromFakeDB), 500);
});
