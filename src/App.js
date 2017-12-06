import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Import the views
import Navigation from './components/partials/Navigation';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';

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
                    <Route exact path="/" component={ Home} />
                    <Route path="/resume" component={ Resume }/>
                    <Route exact path="/portfolio" component={ Portfolio } />
                    <Route path="/portfolio/:projectId" component={ Project } />
                </main>
            </div>
        );

    }
}
export default App;
