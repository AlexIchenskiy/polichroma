import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card } from 'ui-neumorphism';

import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.min.css';

function AppBody(props) {
  const [hue, setHue] = useState(0);

  const onInput = newHue => {
    return;
  };

  const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);

  useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

  return (
    <section className="App-body">
      <section className="App-body-left">
        <p className="App-body-title">Fast and easy neumorphic <b style={{color: colorHsl}}>color</b> palettes generator!</p>
        <p className="App-body-subtitle">Create and export perfect palette for your art project easily.</p>
        <Link to="/polichroma/generator" className='Link-nostyle App-body-button-link'>
          <Button className="App-body-button" style={{height:'55px'}}>
            <h1 style={{fontSize: '18px', color: colorHsl}}>Generate!</h1>
          </Button>
        </Link>
        <Link to='/' className='Link-nostyle App-body-button-link'>
          <Button className="App-body-button" color={colorHsl} style={{height: '55px'}}  outlined>
            <h1 style={{fontSize: '18px'}}>Explore!</h1>
          </Button>
        </Link>
      </section>
      <section className="App-body-right">
        <Card className="Color-picker-outer" elevation={2}>
          <Card className="Color-picker-inner" elevation={2}></Card>
          <ColorPicker hue={hue} onInput={onInput} variant={'persistent'} />
        </Card>
      </section>
    </section>
  );
}

export default AppBody;