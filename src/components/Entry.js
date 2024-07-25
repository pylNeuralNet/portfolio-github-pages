import React from 'react';
import { Link } from 'react-router-dom';
import './Entry.css';

const Entry = ({ image, title, link }) => (
    <div className="entry">
      <a href={link} className="entry-link">
        <div className="entry-inner">
          <div className="entry-front">
            <h3 className="entry-title">{title}</h3>
          </div>
          <div className="entry-back">
            <img src={image} alt={title} className="entry-icon" />
          </div>
        </div>
      </a>
    </div>
  );

export default Entry;