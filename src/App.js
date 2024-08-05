import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import './fonts.css';
import Header from './Components/Header';
import ColorPicker from './Components/ColorPicker';
import SaveButton from './Components/SaveButton';
import SavedColours from './Components/SavedColours';
const cookies = new Cookies();

function App() {

  const [hex, setHex] = useState('#ffffff');
  const [bright, setBright] = useState(true);
  
  let cookie;
  const saveCookie = (savedColours) => {
    cookies.set('saved-colours', savedColours);
  }

  const getBrightness = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      let color = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }

      return (color.r * 299 + color.g * 587 + color.b * 114)/1000
    }
    return 0;
  }

  useEffect(() => {
    let brightness = getBrightness(hex);
    // console.log(result)
    if (brightness > 128) {
      setBright(true);
    } else {
      setBright(false);
    }
  }, [hex])

  const addColour = (colour) => {
    // Only add if it's not already saved
    console.log(colour)
    if (!savedColours.find((item) => item === colour)) {
      let newColours = [...savedColours, colour];
      setSavedColours(newColours);
      saveCookie(newColours);
    }
  }

  const removeColour = (colour) => {
    // Make sure it's in the list
    let index = savedColours.findIndex((item) => item === colour)
    if (index > -1) {
      let newColours = [...savedColours.slice(0, index), ...savedColours.slice(index+1, savedColours.length)]
      setSavedColours(newColours);
      saveCookie(newColours);
    }
  }

  // const [savedColours, setSavedColours] = useState(['#FFE3AD', '#FFADCB', '#FF9B9B']);
  const [savedColours, setSavedColours] = useState([]);

  // Every time colour changes
  // useEffect(() => {
  //   console.log(hex);
  // }, [hex])

  // Setup cookie
  useEffect(() => {
    cookie = cookies.get('saved-colours');
      
    if (cookie && cookie.length > 0) {
      console.log(cookie);
      setSavedColours(cookie);
    } else {
      saveCookie(savedColours);
    }
  }, [])

  return (
    <div className="App" style={{backgroundColor: hex}}>
      <Header bright={bright}/>
      {/* <ColourWheel hex={hex} setHex={setHex}/> */}
      <ColorPicker hex={hex} setHex={setHex} />
      <SaveButton hex={hex} addColour={addColour}/>
      <SavedColours bright={bright} savedColours={savedColours} removeColour={removeColour}/>
    </div>
  );
}

export default App;
