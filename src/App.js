import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';

// Import the views
import Navigation from './components/partials/Navigation';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';

/**
 * Base App Class
 */
class App extends Component {

    render() {

        return (
            <div className="App container-fluid">
                <nav className="col-md-2 col-sm-3">
                    <img className="logo" src="/img/logo.svg" alt=""/>
                    <Navigation />
                    <Contact/>
                </nav>
                <main className="col-md-10 col-sm-9">
                    <Switch>
                        <Route exact path="/" component={ Home} />
                        <Route path="/resume" component={ Resume }/>
                        <Route exact path="/portfolio/:projectId" component={ Project } />
                        <Route path="/portfolio" component={ Portfolio } />
                    </Switch>
                </main>
            </div>
        );

    }
}
export default App;
