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

  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/polichroma' />
      </Route>
      <Route 
        exact path='/polichroma' 
        render={(props) => (
                <MainPage {...props} color={hue} />
               )}
      />
      <Route exact path='/polichroma/generator'>
        <Redirect to={'/polichroma/generator/'}/>
      </Route>
      <Route 
        path='/polichroma/generator'
        render={(props) => (
                <Generator {...props} color={hue} />
               )}
      />
    </Router>
  );
}

export default App;
