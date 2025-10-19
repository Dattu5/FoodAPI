 import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const containerStyle = {
    width: '100vw',
    height: '100dvh',   // dynamic viewport height
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  };

  const bgStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
     transform: 'scale(1.1)', 
    width: '100vw',
    height: '100dvh',
    backgroundImage: 'url(food.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(50%)',
    zIndex: -1,
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
  };

  const buttonStyle = {
    padding: '15px 60px',   // slightly smaller for mobile
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#b10000ff',
    color: 'white',
    marginTop: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
  };

  return (
    <div style={containerStyle}>
      <div style={bgStyle}></div>
      <div style={contentStyle}>
        <h1>Good food, good life!</h1>
        <button style={buttonStyle} onClick={() => navigate('/main')}>
          Explore
        </button>
      </div>
    </div>
  );
}
