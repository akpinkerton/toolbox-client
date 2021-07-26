import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DevBanner from './Components/00-Development/dev';
import Navbar from './Components/00-Navbar';
import Admin from './Routes/00-admin';
import Home from './Routes/01-home';
import Resources from './Routes/02-resources';
import ReadingList from './Routes/03-reading-list';
import Templates from './Routes/04-templates';

import Sandbox from './Routes/00-sadbox';


function App() {

  const inDevelopment = () => {
    if(process.env.NODE_ENV === 'development') {
      return (<>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/sandbox" component={Sandbox} />
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/readinglist" component={ReadingList} />
            <Route exact path="/templates" component={Templates} />
      </>)
    }
  }

  const productionReady = () => {
    if(process.env.NODE_ENV === 'production') {
      return (<>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/readinglist" component={ReadingList} />
            <Route exact path="/templates" component={Templates} />

      </>)
    }
  }


  return (
    <Router>
    <Switch>

      <div className="App">

<DevBanner/>

			<h1> Toolbox </h1>

        <Navbar/>


        <div className="body">

            {inDevelopment()}
            {productionReady()}


        </div>
      </div>
    </Switch>
  </Router>

  );
}

export default App;
