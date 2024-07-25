// src/components/EntryPost.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EntryPost.css';

function EntryPost({ image, title, description, link }) {
  return (
    <div className="post-entry">
      <Link to={`/post/${link}`} className="post-entry-link">
        <div className="post-entry-image">
          <img src={image} alt={title} />
        </div>
        <div className="post-entry-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default EntryPost;