import React from 'react';
import { Header } from 'semantic-ui-react';

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <Header>
                This is the HomePage!
            </Header>
        ); //end return();
    }//end render(){}
}