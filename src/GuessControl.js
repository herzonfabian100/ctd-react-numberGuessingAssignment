import React, { useState } from 'react';
import Button from './Button';

function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess('');
  }


  /**
   * These lines are required to make the methods/functions declared on this
   *  class have the correct `this` object when they run.
   */

  // Since the values from an HTML input are strings by default,
  //  convert to a number for the returned guess value
  //  by passing in the string to the Number function.
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number



  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button type="submit" onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  )
}

export default GuessControl;