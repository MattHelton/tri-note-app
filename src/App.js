import React from 'react';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
      <Note />
    </div>
  );
}

export default App;
