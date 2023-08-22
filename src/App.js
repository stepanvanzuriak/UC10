import { useState } from 'react';
import { validate } from './lib/validator';

const App = () => {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setIsValid(validate(value));
  };

  return (
    <div id="app">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter your string..."
      />
      <div>{isValid ? 'String is valid.' : 'String is not valid.'}</div>
    </div>
  );
};

export default App;
