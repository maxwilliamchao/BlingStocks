import React, { Component } from "react";
import API from "../../utils/API"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardTitle,CardBody} from 'material-ui/Card'
import Header from "../Header" 
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class SignUp extends Component{
    state = {
        username:"",
        email:"",
        phone:"",
        password1:"",
        password2:""
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
        const email = this.state.email;
        const phone = this.state.phone;
        const password1 =  this.state.password1;
        const password2 = this.state.password2;
        
        if(password1 === password2){
            const data = {
            username:username,
            email:email,
            phone:phone,
            password:password1  
            };
            console.log(data);
            API.saveUser(data);
        }else{
            alert("passwords dont match")
        }
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
                                <CardTitle title = "SignUp" />
                        </div>
                        <Form>
                            <legend>UserName:</legend>
                            <Input   
                                type = "text"
                                id = "username"
                                placeholder = "enter username here"
                                value = {this.state.username}
                                onChange = {this.handleInputChange}
                                name = "username"
                                required/>
                            <legend>Email</legend>
                            <Input 
                                placeholder="Enter your email Here"
                                id = "email"
                                value = {this.state.email}
                                onChange = {this.handleInputChange}
                                name = "email" 
                                required/>
                            <legend>Phone</legend>
                            <Input 
                                placeholder="Enter your phone Here"
                                id = "phone" 
                                value = {this.state.phone}
                                onChange = {this.handleInputChange}
                                name = "phone"
                                required/>
                            <legend>Password:</legend>
                            <Input 
                                placeholder="Reenter your password Here"
                                id = "password1"
                                value = {this.state.password1}
                                onChange = {this.handleInputChange}
                                name = "password1"
                                type = "password"
                                required/>
                            <legend> Re Enter Password:</legend>
                            <Input 
                                placeholder="Reenter your password Here"
                                id = "password2"
                                value = {this.state.password2}
                                onChange = {this.handleInputChange}
                                name = "password2"
                                type = "password"
                                required/>
                            <Button 
                            variant="raised" 
                            color = "primary"
                            type = "onFormSubmit"
                            onClick = {this.handleFormSubmit}
                            >Signup</Button>
                         </Form>
                        </Card> 
                    </div>
               </MuiThemeProvider>
            </div>
        );
    }
}

export default SignUp;