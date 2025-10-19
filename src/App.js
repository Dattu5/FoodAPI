import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* Home page */}
        <Route path="/main" element={<Main />} />  {/* Main page */}
      </Routes>
    </Router>


    
    
    
    </>
  );
}

export default App;
