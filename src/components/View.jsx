import React, { useState } from 'react';
import axios from 'axios';

function View() {
  const [name, setName] = useState('');
  const [ticket, setTicket] = useState(null);

  const handleView = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/view', {
        params: { name }
      });
      setTicket(res.data);
    } catch (err) {
      alert(err + 'Ticket not found');
    }
  };

  return (
    <div>
      <h2>View Ticket</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <button onClick={handleView}>View Ticket</button>
      {ticket && <pre>{JSON.stringify(ticket, null, 2)}</pre>}
    </div>
  );
}

export default View;
