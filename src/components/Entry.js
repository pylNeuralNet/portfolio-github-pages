import React from 'react';
import { Link } from 'react-router-dom';
import './Entry.css';

function Entry({ image, title, description, link }) {
  const EntryContent = () => (
    <>
      <div className="entry-image">
        <img src={image} alt={title} />
      </div>
      <div className="entry-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );

  const isExternalLink = link && (link.startsWith('http://') || link.startsWith('https://'));

  return (
    <div className="entry">
      {link ? (
        isExternalLink ? (
          <a href={link} className="entry-link" target="_blank" rel="noopener noreferrer">
            <EntryContent />
          </a>
        ) : (
          <Link to={link} className="entry-link">
            <EntryContent />
          </Link>
        )
      ) : (
        <EntryContent />
      )}
    </div>
  );
}

export default Entry;