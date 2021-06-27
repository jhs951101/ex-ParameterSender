import React, { useState } from 'react';
import Header from './pages/Header';
import Body from './pages/Body';

let appText = 'Hello Body!';

function App() {

  let [bodyText, setBodyText] = useState('NULL');

  let changeBodyText = (text) => {
    setBodyText(text);
  };

  return (
    <div>
      App:<br/>
      {bodyText}<br/><br/>
      Head: <Header bodyText={bodyText}/><br/>
      Body: <Body appText={appText} changeBodyText={changeBodyText}/><br/>
    </div>
  );
}

export default App;

/*
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';

<div>
  <Router>
    <Switch>
      <Route exact path="/" component={Auth(LandingPage, true )} />
      <Route exact path="/login" component={Auth(LoginPage, false )} />
      <Route exact path="/register" component={Auth(RegisterPage, false )} />
    </Switch>
  </Router>
</div>
*/