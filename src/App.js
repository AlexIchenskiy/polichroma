import React, { useState, useEffect } from 'react';
import { Redirect, HashRouter as Router, Route } from 'react-router-dom';

import MainPage from './components/mainpage.component';
import Generator from './components/generator.component';

function App() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => hue > 359 ? setHue(0) : setHue(hue + 1), 100);
    return () => clearInterval(interval);
  });

  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/' />
      </Route>
      <Route 
        exact path='/' 
        render={(props) => (
                <MainPage {...props} color={hue} />
               )}
      />
      <Route path='/generator'>
        <Redirect to={'/generator'}/>
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
