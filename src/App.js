import React, { useState } from 'react';
import Input from './Input';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    console.log(inputValue);
  };

  return (
    <div>
      <Input onInputChange={handleInputChange} value={inputValue} />
    </div>
  );
};

export default App;
