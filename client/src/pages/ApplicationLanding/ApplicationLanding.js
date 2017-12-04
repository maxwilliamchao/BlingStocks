import React,{Component} from "react";
import Header from '../../components/Header'
import {Card,CardTitle} from 'material-ui/Card'

class ApplicationLanding extends Component {
    render(){
        return(
            <div className = "mui-container-fluid">
                <div className = "header">
                    <Header />
                </div>
                <span><br/><br/><br/><br/><br/><br/><br/></span>
                <div className = "mui-row">
                    <div className = "mui-col-md-12"> 
                    <Card className = "mui-container" >
                        <CardTitle title = "BlingStocks" subtitle = "your personal stock tracker"/>
                    </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplicationLanding;