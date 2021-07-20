import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Routes/01-Home'
import Sandbox from '../Routes/Sandbox';
import Gadgets from '../Routes/Gadgets';
import Resources from '../Routes/02-Resources';
import ReadingList from '../Routes/03-Reading-list';
import Templates from '../Routes/04-Templates';


import Navbar from './Navbar'


function App() {
  return (
    <Router>
    <Switch>

      <div className="App">
        <Navbar/>
        <div className="body">
            <Route exact path="/" component={Home} />
            <Route exact path="/sandbox" component={Sandbox} />
            <Route exact path="/gadgets" component={Gadgets} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/readinglist" component={ReadingList} />
            <Route exact path="/templates" component={Templates} />

        </div>
      </div>
    </Switch>
  </Router>

  );
}

export default App;
