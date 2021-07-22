import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Routes/home'
import Resources from '../Routes/resources';
import ReadingList from '../Routes/reading-list';
import Templates from '../Routes/templates';
import Navbar from './Navbar'

import Sandbox from '../Routes/sadbox';
import Gadgets from '../Routes/gadgets';
import DevBanner from './000-Dev-Tools/dev';


function App() {


  return (
    <Router>
    <Switch>

      <div className="App">

<DevBanner/>


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
