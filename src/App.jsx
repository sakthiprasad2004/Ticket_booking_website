import React from 'react';
import Book from './components/Book';
import Cancel from './components/Cancel';
import View from './components/View';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <h1>Ticket Booking System</h1>
      <Book />
      <Cancel />
      <View />
      <ViewAll />
    </div>
  );
}

export default App;
