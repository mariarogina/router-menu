import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/Main';
import DriftTaxi from './components/DriftTaxi';
import TimeAttack from './components/TimeAttack';
import ForzaCarting from './components/ForzaCarting';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={Main} />
          <Route path="/drifttaxi" component={DriftTaxi} />
          <Route path="/timeattack" component={TimeAttack} />
          <Route path="/forzacarting" component={ForzaCarting} />
        </div>
      </div>
    </Router>
  );
}

export default App;