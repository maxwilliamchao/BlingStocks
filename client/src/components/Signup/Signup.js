import React, { Component } from "react";
import API from "../../utils/API"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardTitle,CardBody} from 'material-ui/Card'
import Header from "../Header" 
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class Signin extends Component{
    render(){
        return(
            <div ClassName = "mui-container-fluid">
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
                            <Input placeholder="Enter Your UserName Here" />
                            <legend>Password:</legend>
                            <Input placeholder="Enter your password Here" />
                            <legend> Re Enter Password:</legend>
                            <Input placeholder="Reenter your password Here" />
                            <Button variant="raised" color = "primary">Signin</Button>
                         </Form>
                        </Card> 
                    </div>
               </MuiThemeProvider>
            </div>
        );
    }
}

export default Signin;