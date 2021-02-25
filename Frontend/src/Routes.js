import React from 'react';

import {Header} from 'semantic-ui-react';
import { BrowserRouter, Route, Switch, Redirect, } from "react-router-dom";

import HomePage from './Pages/HomePage.js';
import ProjectPage from './Pages/ProjectPage.js';


export default class Routes extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/projects" component={ProjectPage}/>
                        <Redirect to="/404" />
                    </Switch>
                </BrowserRouter>
          </div>
        );
    }
}