import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAll = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/viewall")
      .then(response => {
        setTickets(response.data);
      })
      .catch(err => {
        setError("Could not fetch tickets");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>All Tickets</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, idx) => (
              <tr key={idx}>
                <td>{ticket.name}</td>
                <td>{ticket.fromStation}</td>
                <td>{ticket.toStation}</td>
                <td>{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAll;
