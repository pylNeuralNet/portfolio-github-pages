import React from 'react';
import './Tiles.css';
import { Link } from 'react-router-dom';

const Tile = ({ children, color, link, flipDirection }) => (
    <div className={`tile ${flipDirection}`}>
      <div className="tile-inner">
        <div className="tile-front" style={{ backgroundColor: color }}>
          {children[0]}
        </div>
        {link ? (
          <a href={link} className="tile-back tile-link" style={{ backgroundColor: color }} target="_blank" rel="noopener noreferrer">
            {children[1]}
          </a>
        ) : (
          <div className="tile-back" style={{ backgroundColor: color }}>
            {children[1]}
          </div>
        )}
      </div>
    </div>
  );

  export const ImageTile = ({ image, title, description, link, color, flipDirection }) => (
    <Tile link={link} color={color} flipDirection={flipDirection}>
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        {description && <p className="tile-description">{description}</p>}
      </div>
      <div className="tile-content">
        <img src={image} alt={title} className="tile-icon" />
      </div>
    </Tile>
  );
  
  export const DescriptionTile = ({ title, description, link, color, flipDirection }) => (
    <Tile link={link} color={color} flipDirection={flipDirection}>
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
      </div>
      <div className="tile-content">
        <p className="tile-description">{description}</p>
      </div>
    </Tile>
  );
  
  export const ContactTile = ({ title, contactLinks, color, flipDirection }) => (
    <Tile color={color} flipDirection={flipDirection}>
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
      </div>
      <div className="tile-content">
        <div className="contact-links">
          {contactLinks.map((contactLink, index) => (
            <a 
              key={index} 
              href={contactLink.url} 
              className="contact-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {contactLink.name}
            </a>
          ))}
        </div>
      </div>
    </Tile>
  );

  export const BlogTile = ({ title, excerpt, slug, color, flipDirection }) => (
    <Tile color={color} flipDirection={flipDirection}>
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{excerpt}</p>
      </div>
      <div className="tile-content">
        <Link to={`/blog/${slug}`} className="read-more">Read Full Post</Link>
      </div>
    </Tile>
  );