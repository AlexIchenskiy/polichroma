import React, { useState, useEffect } from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './components/mainpage.component';
import Generator from './components/generator.component';

function App() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => hue > 359 ? setHue(0) : setHue(hue + 1), 100);
    return () => clearInterval(interval);
  });

  function genColors(n) {
    let colors = '';
    for (let i = 0; i < n; i++) {
      colors += (((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6)) + '-';
    }
    return colors.slice(0, -1);
  }

  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/polichroma' />
      </Route>
      <Route 
        path='/polichroma' 
        render={(props) => (
                <MainPage {...props} color={hue} />
               )}
      />
      <Route exact path='/generator'>
        <Redirect to={'/generator/' + genColors(4)}/>
      </Route>
      <Route 
        path='/generator'
        render={(props) => (
                <Generator {...props} color={hue} />
               )}
      />
    </Router>
  );
}

export default App;
