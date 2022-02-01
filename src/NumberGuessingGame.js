import React, { useState, useEffect } from 'react';
import GameOver from "./GameOver";
import GuessMessage from './GuessMessage';
import GuessControl from './GuessControl';

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
const NumberGuessingGame = () => {
  const [numberToGuess, setNumberToGuess] = useState('');
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState('');
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  }

  useEffect(() => {
    setNumberToGuess(getRandomNumber);
  }, [])

  const MAX_ATTEMPTS = 5;

  const handleGuess = (guess) => {
    setIsCorrectGuess(guess === numberToGuess);
    setNumberOfGuesses(numberOfGuesses + 1);
    setLatestGuess(guess)
    setIsGameOver(numberOfGuesses + 1 === MAX_ATTEMPTS)
  }

  const handleReset = () => {
    setNumberOfGuesses(0);
    setIsGameOver(false);
    setLatestGuess('');
    setIsCorrectGuess(false);
    setNumberToGuess(getRandomNumber);
  }


  /**
   * These lines are required to make the methods/functions declared on this
   *  class have the correct `this` object when they run.
   */


  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}


export default NumberGuessingGame;