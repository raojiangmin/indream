import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import loading from './views/loading'
import index from './views/index'
import shareGroup from './views/shareGroup'
import personal from './views/personal'
import takiling from './views/takiling'
import aboutUs from './views/Aboutus'
import clockUs from './views/Clockus'
import discovery from './views/Discovery'
import help from './views/Help'
import around from './views/HuanRao'






class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path='/' exact component={loading}></Route>
                        <Route path='/index' component={index}></Route>
                        <Route path='/personal' component={personal}></Route>
                        <Route path='/shareGroup' component={shareGroup}></Route>
                        <Route path='/takiling' component={takiling}></Route>
                        <Route path='/help' component={help}></Route>
                        <Route path='/aboutUs' component={aboutUs}></Route>
                        <Route path='/discovery' component={discovery}></Route>
                        <Route path='/clockUs' component={clockUs}></Route>
                        <Route path='/around' component={around}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
