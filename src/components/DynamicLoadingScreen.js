import React, { useState, useEffect, useCallback } from 'react';
import './DynamicLoadingScreen.css';

const GRID_SIZE = 20;
const CHANGE_INTERVAL = 100; // 0.3 seconds
const WORDS = ['SACRED', 'SPIRITUAL', 'LOADING', 'EXPERIENCE', 'STORY'];

function DynamicLoadingScreen() {
  const [grid, setGrid] = useState([]);

  const getRandomChar = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  };

  const getRandomColor = () => { // I changed my mind, now unused
    return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  };

  const insertRandomWord = useCallback((grid) => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    const row = Math.floor(Math.random() * (GRID_SIZE - 1));
    const col = Math.floor(Math.random() * (GRID_SIZE - word.length));

    for (let i = 0; i < word.length; i++) {
      grid[row][col + i] = { char: word[i], color: 'white' };
    }
  }, []);

  const updateRandomCell = useCallback((grid) => {
    const row = Math.floor(Math.random() * GRID_SIZE);
    const col = Math.floor(Math.random() * GRID_SIZE);
    grid[row][col] = { char: getRandomChar(), color: getRandomColor() };
  }, []);

  useEffect(() => {
    const initialGrid = Array(GRID_SIZE).fill().map(() => 
      Array(GRID_SIZE).fill().map(() => ({
        char: getRandomChar(),
        color: getRandomColor(),
      }))
    );
    setGrid(initialGrid);

    const intervalId = setInterval(() => {
      setGrid(prevGrid => {
        const newGrid = [...prevGrid];
        if (Math.random() < 0.1) { // 10% chance to insert a word
          insertRandomWord(newGrid);
        } else {
          updateRandomCell(newGrid);
        }
        return newGrid;
      });
    }, CHANGE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [insertRandomWord, updateRandomCell]);

  return (
    <div className="dynamic-loading-screen">
      {grid.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <span key={`${i}-${j}`} style={{ color: cell.color }}>{cell.char}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DynamicLoadingScreen;