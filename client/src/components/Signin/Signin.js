import React, { Component } from "react";
import API from "../../utils/API"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardTitle,CardBody} from 'material-ui/Card'
import Header from "../Header" 
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import { Link } from "react-router-dom";

class Signin extends Component{
    state = {
        username:"",
        password:""
    };

    handleInputChange = event =>{
        const {name,value} = event.target
        this.setState({
            [name]:value
        }); 
    }

    
    handleFormSubmit = event =>{
        event.preventDefault();
        const username = this.state.username;
        const password =  this.state.password;
    
        
        const data = {
          username:username,
          password:password  
        };
        console.log(data);
        API.getUser(data);
    }
    render(){
        return(
            <div className = "mui-container-fluid">
                <div className = "header">
                    <Header />
                    <span><br/><br/><br/><br/><br/><br/><br/></span>
                </div>
               <MuiThemeProvider>
                    <div>
                        <Card className = "mui-container ">
                        <div className = "mui-row mui--text-center">    
                                <CardTitle title = "Signin" />
                        </div>
                        <Form>
                            <legend>UserName:</legend>
                            <Input 
                            placeholder="Enter Your UserName Here" 
                            id = "username"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                            name = "username"
                            required
                            />
                            <legend>Password:</legend>
                            <Input 
                            placeholder="Enter your password Here"
                            id ="password"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                            name = "password" 
                            required/>
                            <Button 
                            variant="raised" 
                            color = "primary"
                            type = "onFormSubmit"
                            onClick = {this.handleFormSubmit}
                            >Signin</Button>
                         </Form>
                        </Card> 
                    </div>
               </MuiThemeProvider>
            </div>
        );
    }
}

export default Signin;