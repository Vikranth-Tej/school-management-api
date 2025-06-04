// src/App.js

import React from 'react';
import AddSchoolForm from './components/AddSchoolForm';
import SchoolList from './components/SchoolList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🏫 School Management Portal</h1>
        <p className="App-subtitle">Add schools and find them by your location 📍</p>
      </header>
      
      <main className="App-main">
        <section className="App-section">
          <AddSchoolForm />
        </section>
        <hr className="App-divider" />
        <section className="App-section">
          <SchoolList />
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2025 Vikranth Tej | Made with ❤️ using React + Node.js</p>
      </footer>
    </div>
  );
};

export default App;
