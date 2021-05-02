import './App.css';

import React, { useState } from 'react';

import { Button, Card, Dialog, Divider, Fab } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.min.css';

function App() {
  const [visible, setVisible] = useState(false);

  const [color, setColor] = React.useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onInput = hue => {
    setColor(prev => {
      return {
        ...prev,
        hue,
      };
    });
  };

  return (
    <Card className="App" elevation={2}>
      <Card style={{ borderRadius: '8px 8px 0 0'}}>
        <header className="App-header">
          <div><h1 className="Logo">poli</h1><h1 className="Logo Color-changeable">chroma</h1></div>
          <nav className="Nav-header">
            <ul>
              <li><Button className="Animate-shadow-text" text>Generate</Button></li>
              <li><Divider style={{width:'4px', height:'100%'}} dense /></li>
              <li><Button className="Animate-shadow-text" text>Sign in</Button></li>
              <li><Button className="Color-changeable Animate-shadow-button">Sign up</Button></li>
            </ul>
          </nav>
          <Fab className="Burger-menu" onClick={() => setVisible(true)}>
              <span className="Color-changeable">&#9776;</span>
          </Fab>
        </header>
      </Card>
      <section className="App-body">
        <section className="App-body-left">
          <p className="App-body-title">Fast and easy neumorphic <b className="Color-changeable">color</b> palettes generator!</p>
          <p className="App-body-subtitle">Create and export perfect palette for your art project easily.</p>
          <Button className="App-body-button Color-changeable" style={{height:'55px'}}>
            <h1 style={{fontSize: '18px'}}>Generate!</h1>
          </Button>
          <Button className="App-body-button Border-color-changeable" style={{height:'55px'}} outlined>
            <h1 style={{fontSize: '18px'}}>Explore!</h1>
          </Button>
        </section>
        <section className="App-body-right">
          <Card className="Color-picker-outer" elevation={2}>
            <ColorPicker {...color} onInput={onInput} />
          </Card>
        </section>
      </section>
      <Dialog onClose={() => setVisible(false)} visible={visible}>
        <Card  className='Modal-nav'>
          <Button text>Generate</Button>
          <Button text>Sign in</Button>
          <Button className="Color-changeable">Sign up</Button>
          <Button onClick={() => setVisible(false)}>Close</Button>
        </Card>
      </Dialog>
    </Card>
  );
}

export default App;
