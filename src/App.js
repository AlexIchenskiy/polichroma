import './App.css';

import { Button, Card, Divider } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

function App() {
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
        </header>
      </Card>
      <section className="App-body">
        <section class="App-body-left">
          <p className="App-body-title">Fast and easy neumorphic <b className="Color-changeable">color</b> palettes generator!</p>
          <p className="App-body-subtitle">Create and export perfect palette for your art project easily.</p>
          <Button className="App-body-button Color-changeable" style={{height:'55px'}}>
            <h1 style={{fontSize: '18px'}}>Generate!</h1>
          </Button>
          <Button className="App-body-button Border-color-changeable" style={{height:'55px'}} outlined>
            <h1 style={{fontSize: '18px'}}>Explore!</h1>
          </Button>
        </section>
        <section class="App-body-right">
        </section>
      </section>
    </Card>
  );
}

export default App;
