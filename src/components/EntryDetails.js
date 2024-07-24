import React from 'react';
import { useParams } from 'react-router-dom';

function EntryDetails() {
  const { id } = useParams();

  // You would typically fetch the project details based on the id
  // For now, we'll just display the id
  return (
    <div className="entry-details">
      <h2>Project Details</h2>
      <p>Details for project with id: {id}</p>
    </div>
  );
}

export default EntryDetails;