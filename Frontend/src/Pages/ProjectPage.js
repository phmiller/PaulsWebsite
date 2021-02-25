import React from 'react';
import { Header } from 'semantic-ui-react';

export default class ProjectPage extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <Header>
                This is the ProjectPage!
            </Header>
        ); //end return();
    }//end render(){}
}