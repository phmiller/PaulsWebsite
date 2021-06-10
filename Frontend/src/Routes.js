import React from 'react';

import {Breadcrumb } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch, Redirect, Link, } from "react-router-dom";

import HomePage from './Pages/HomePage.js';
import AboutPaul from './Pages/About/AboutPaul';


export default class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        };
        this.handleBreadcrumbClick = this.handleBreadcrumbClick.bind(this);
    }

    render() {
        // console.log(window.location.href);
        // var href = window.location.href.split('/');
        // var breadArray = [];
        // console.log(href);

        // if (href[3] == "") {
        //     breadArray[0]= 
        //         <div>
        //             <Breadcrumb.Section link onClick={this.handleBreadcrumbClick()}>HomePage</Breadcrumb.Section>
        //             <Breadcrumb.Divider icon='right angle' />
        //         </div>
        // }
        // else {
        //     for(var i = 3; i < href.length; i++) {
        //         breadArray[i-3] = 
        //         <div>
        //             <Breadcrumb.Section link onClick={this.handleBreadcrumbClick()}>HomePage</Breadcrumb.Section>
        //             <Breadcrumb.Divider icon='right angle' />
        //         </div>
        //     }
        // }

        // console.log(breadArray);
        
        return(
            <div>
                <BrowserRouter>
                    {/* <Breadcrumb>
                        {breadArray.map((item, index) => (
                            item
                        ))}
                    </Breadcrumb> */}
                    <br/>
                    <br/>

                    <Switch>
                        <Route exact path="/About/PaulHodowalMiller" component={AboutPaul}/>
                        <Route exact path="/" component={HomePage}/>
                        <Redirect to="/404" />
                    </Switch>
                </BrowserRouter>
            </div>

          
        ); //End return();
    } //End render()

    handleBreadcrumbClick(e){
        console.log(window.location.href)
        console.log(e);
    }

    

} //End Routes