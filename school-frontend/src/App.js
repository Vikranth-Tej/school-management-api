// src/App.js

import React from 'react';
import AddSchoolForm from './components/AddSchoolForm';
import SchoolList from './components/SchoolList';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🏫 School Management</h1>
      <AddSchoolForm />
      <SchoolList />
    </div>
  );
};

export default App;
