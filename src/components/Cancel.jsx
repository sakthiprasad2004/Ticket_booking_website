import React, { useState } from 'react';
import axios from 'axios';

const Cancel = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleCancel = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/cancel', name);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage(error + 'An error occurred while canceling.');
    }
  };

  return (
    <div>
      <h2>Cancel Ticket</h2>
      <form onSubmit={handleCancel}>
        <input
          type="text"
          placeholder="Enter passenger name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Cancel</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Cancel;
