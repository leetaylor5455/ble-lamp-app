import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import './fonts.css';
import Header from './Components/Header';
import ColourWheel from './Components/ColourWheel';
import SaveButton from './Components/SaveButton';
import SavedColours from './Components/SavedColours';
const cookies = new Cookies();

function App() {

  const [hex, setHex] = useState('#fff');
  
  const saveCookie = (savedColours) => {
    cookies.set('saved-colours', savedColours);
  }

  const addColour = (colour) => {
    // Only add if it's not already saved
    console.log(colour)
    if (!savedColours.find((item) => item == colour)) {
      let newColours = [...savedColours, colour];
      setSavedColours(newColours);
      saveCookie(newColours);
    }
  }

  const removeColour = (colour) => {
    // Make sure it's in the list
    let index = savedColours.findIndex((item) => item == colour)
    console.log(...savedColours.slice(0, index))
    console.log(...savedColours.slice(index+1, savedColours.length))
    if (index > -1) {
      let newColours = [...savedColours.slice(0, index), ...savedColours.slice(index+1, savedColours.length)]
      setSavedColours(newColours);
      saveCookie(newColours);
    }
  }

  // const [savedColours, setSavedColours] = useState(['#FFE3AD', '#FFADCB', '#FF9B9B']);
  const [savedColours, setSavedColours] = useState([]);

  // Every time colour changes
  useEffect(() => {
    // console.log(hex);
  }, [hex])

  // Setup cookie
  useEffect(() => {
    let cookie = cookies.get('saved-colours');
      
    if (cookie && cookie.length > 0) {
      console.log(cookie);
      setSavedColours(cookie);
    } else {
      saveCookie(savedColours);
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <ColourWheel hex={hex} setHex={setHex}/>
      <SaveButton hex={hex} addColour={addColour}/>
      <SavedColours savedColours={savedColours} removeColour={removeColour}/>
    </div>
  );
}

export default App;
