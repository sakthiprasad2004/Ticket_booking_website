import React, { useState } from 'react';
import axios from 'axios';

function Book() {
  const [ticket, setTicket] = useState({
    name: '',
    fromStation: '',
    toStation: '',
    date: ''
  });

  const handleChange = e => setTicket({ ...ticket, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/book', ticket);
      alert(res.data.message);
    } catch (err) {
      alert(err + 'Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="fromStation" placeholder="From" onChange={handleChange} required />
      <input name="toStation" placeholder="To" onChange={handleChange} required />
      <input name="date" placeholder="Date" onChange={handleChange} required />
      <button type="submit">Book</button>
    </form>
  );
}

export default Book;
