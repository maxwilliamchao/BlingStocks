import React,{Component} from "react";
import Header from '../../components/Header'
import {Card,CardTitle} from 'material-ui/Card'
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom';
class ApplicationLanding extends Component {
    render(){
        return(
            <div className = "mui-container-fluid">
                <div className = "header">
                    <Header />
                </div>
                <span><br/><br/><br/><br/><br/><br/><br/></span>
                <div className = "mui-row">
                    <div className = "mui-col-md-12 text-center"> 
                    <Card className = "mui-container" >
                        <CardTitle title = "BlingStocks" subtitle = "your personal stock tracker"/>
                        <div className = "mui-col-md-12">
                        <Link to = "/signin"><Button variant="raised" color = "primary">Signin</Button></Link>
                        </div>
                        <div className = "mui-col-md-12">
                        <Link to = "/signup"><Button variant="raised" color = "primary">Signup</Button></Link>
                        </div>
                        
                    </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplicationLanding;