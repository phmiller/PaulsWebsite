import React from 'react';
import { Form, Grid, Header, Image, Menu, Segment, TextArea } from 'semantic-ui-react';
import ProfilePic from '../Images/ProfilePic.jpg'

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
        this.handleItemClick = this.handleItemClick.bind(this);

    }

    render(){
        return(
            <Grid columns={3} >
                <Grid.Column> {/*This Grid Column Holds the Directory on the Main Page */}
                    <Menu vertical >
                        {/* About */}
                        <Menu.Item>
                            <Menu.Header>About</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='About Paul'
                                    onClick={this.handleItemClick}
                                    link='/About/PaulHodowalMiller'
                                />
                            </Menu.Menu>
                        </Menu.Item>
                        {/* Education */}
                        <Menu.Item>
                            <Menu.Header>Education</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='Purdue University '
                                    onClick={this.handleItemClick}
                                    link='/Education/PurdueUniversity'
                                />
                                <Menu.Item
                                    name='Park Tudor School K-12'
                                    onClick={this.handleItemClick}
                                    link='/Education/ParkTudorSchoolK-12'
                                />
                            </Menu.Menu>
                        </Menu.Item>
                        {/* Projects */}
                        <Menu.Item>
                            <Menu.Header>Projects</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='BoilerBets'
                                    onClick={this.handleItemClick}
                                    link='/Projects/BoilerBets'
                                />
                                <Menu.Item
                                    name='Drinks With Friends'
                                    onClick={this.handleItemClick}
                                    link='/Projects/DrinksWithFriends'
                                />
                                <Menu.Item
                                    name='LectureLogic'
                                    onClick={this.handleItemClick}
                                    link='/Projects/LectureLogic'
                                />
                            </Menu.Menu>
                        </Menu.Item>
                        {/* Work Experience */}
                        <Menu.Item>
                            <Menu.Header>Work Experience</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='Purdue University'
                                    onClick={this.handleItemClick}
                                    link='/WorkExperience/PurdueUniversity'
                                />
                                <Menu.Item
                                    name='Single Source'
                                    onClick={this.handleItemClick}
                                    link='/WorkExperience/SingleSource'
                                />
                                <Menu.Item
                                    name='Park Tudor School'
                                    onClick={this.handleItemClick}
                                    link='/WorkExperience/ParkTudorSchool'
                                />
                            </Menu.Menu>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                    <Image src={ProfilePic} inline={true} />

                    <Header as='h1' textAlign='center'>
                        Paul Hodowal Miller
                    </Header>

                    <Form>
                        Hello and welcome to my website! My name is Paul Miller
                        and I am a senior at Purdue University majoring in Computer Science.
                        I have made this website to help you learn more aboout me, my studies,
                        my work experience, and much more.
                    </Form>
                </Grid.Column>
            </Grid>

        ); //end return();
    }//end render(){}

    handleItemClick(e, { name, link }){
        console.log('name: ' + name + ' | link: ' + link);
        window.location.replace('http://localhost:3000' + link);
    }
}