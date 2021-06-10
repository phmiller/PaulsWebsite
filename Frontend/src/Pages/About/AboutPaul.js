import React from 'react';
import { Form, Grid, Header, Image, Menu, Segment, TextArea } from 'semantic-ui-react';

export default class AboutPaul extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }

    }

    render(){
        return(
            <Header>About Paul</Header>

        ); //end return();
    }//end render(){}

    handleItemClick(e, { name, link }){
        console.log('name: ' + name + ' | link: ' + link);
        window.location.replace('localhost:3000' + link);
    }
}