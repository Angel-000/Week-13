import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;

