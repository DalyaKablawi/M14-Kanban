// client/src/components/KanbanBoard.js
import React, { useEffect, useState } from "react";
import { getAuthToken } from "../utils/auth";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      window.location.href = "/login";
    }

    const fetchTickets = async () => {
      const response = await fetch("/api/tickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTickets(data);
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Kanban Board</h1>
      {tickets.map((ticket) => (
        <div key={ticket.id}>{ticket.title}</div>
      ))}
    </div>
  );
};

export default KanbanBoard;
