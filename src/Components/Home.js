import React from 'react'
import { useNavigate } from 'react-router-dom';
 export default function Home() {

const navigate = useNavigate();

  const containerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  };

  const bgStyle = {
    backgroundImage: 'url(food.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    filter: 'brightness(50%)', // <-- makes image darker
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '15px 80px',
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
        <button style={buttonStyle} onClick={() => navigate('/main')}>Explore</button>
      </div>
    </div>
  );
}

  
