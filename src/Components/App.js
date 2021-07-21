import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Routes/home'
import Sandbox from '../Routes/sadbox';
import Gadgets from '../Routes/gadgets';
import Resources from '../Routes/resources';
import ReadingList from '../Routes/reading-list';
import Templates from '../Routes/templates';
import Navbar from './Navbar'


function App() {
  return (
    <Router>
    <Switch>

      <div className="App">

        <p>You are currently running in {process.env.NODE_ENV} mode.</p>

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
