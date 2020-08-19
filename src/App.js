import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mobile from './Mobile';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/original'
          component={() => {
            global.window &&
              (global.window.location.href =
                'https://www.facebook.com/BabyVideos1/videos/1583253218559745/');
            return null;
          }}
        />
        <Route path='/'>
          <Mobile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
