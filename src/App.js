import React, { useState, useEffect } from 'react';
import './App.css';
import CovidEngine from './components/CovidEngine';
const App = () => {
  return (

    <div>
      <CovidEngine location='PK' />
    </div>
  )
}
export default App;