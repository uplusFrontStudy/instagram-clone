import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(value);
  }, [value]);
  return <></>;
}

export default App;
