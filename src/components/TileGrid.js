import React, { useMemo } from 'react';
import { colorPalette } from '../classes/colors';
import { ImageTile, DescriptionTile, ContactTile, BlogTile } from './Tiles';
import './Tiles.css';
import entries from '../classes/entries';

const getColor = (index) => {
  const color = colorPalette[index % colorPalette.length];
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};

const TileGrid = () => {
    const sortEntries = (a, b) => a.id - b.id;
  
    const sortedEntries = useMemo(() => {
        return entries.toSorted(sortEntries);
      }, [entries]);
  
    return (
      <div className="tile-container">
        {sortedEntries.map((entry, index) => {
          const color = getColor(index);
          const flipDirection = index % 2 === 0 ? 'flip-right' : 'flip-left';
          switch(entry.type) {
            case 'contact':
              return <ContactTile key={entry.id} {...entry} color={color} flipDirection={flipDirection} />;
            case 'image':
              return <ImageTile key={entry.id} {...entry} color={color} flipDirection={flipDirection} />;
            case 'description':
              return <DescriptionTile key={entry.id} {...entry} color={color} flipDirection={flipDirection} />;
            case 'blog':
              return <BlogTile key={entry.id} {...entry} color={color} flipDirection={flipDirection} />;
            default:
              return null;
          }
        })}
      </div>
    );
  };

export default TileGrid;