import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)
      
      // ACTION ITEM: your Pig Latin logic goes here!

      // Pseudocode
          // Input: If the first letter in the word is strictly equal to the first vowel in the word, then we can say the word starts with a vowel
            // Output: .concat() "way" to the end of the word
          // Input: if the index of "qu" is != -1, then the word contains "qu"; if the index of "qu" < the index of the first vowel in the word, then qu comes before any other vowel
            // Output: slice of the word starting after "qu" plus slice of the beginning of the word plus "ay"

          //input: if eachWord has no vowels but has a y
          //output: eachWord.slice() and add letters before that y to after the Y.
          // example: fry => y+fr+ay

        if (eachWord[0] === vowelsArray[0]) {
          eachWord = eachWord.concat("way")
        } else if (eachWord.indexOf("qu") !== -1 && eachWord.indexOf("qu") < eachWord.indexOf(vowelsArray[0])) {
          eachWord = eachWord.slice(eachWord.indexOf("qu")+2).concat(eachWord.slice(0, eachWord.indexOf("qu")+2)).concat("ay")
        } else if (eachWord.indexOf("y") !== -1 && eachWord.indexOf(vowelsArray[0]) === -1) {
          eachWord = eachWord.slice(eachWord.indexOf("y")).concat(eachWord.slice(0, eachWord.indexOf("y"))).concat("ay")
        }
        

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
       
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
