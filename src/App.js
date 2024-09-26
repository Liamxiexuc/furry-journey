import React from 'react';
import Routes from './route/Routes';
import TopNav from './navigation/TopNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes /> 
    </div>
  );
}

export default App;
