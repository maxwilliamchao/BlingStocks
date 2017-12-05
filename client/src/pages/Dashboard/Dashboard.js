import React, {Component} from "react";
import Header from "../../components/Header"
import SearchBar from 'material-ui-search-bar'
import API from "../../utils/API";
import ResultsPanel from "../../components/ResultsPanel"

class Dashboard extends Component {
    state = {
        results:[],
        dataSource: ""
    };
    handleInputChange = value =>{
       
       this.setState({
           dataSource:[value]
       });
    };

    handleRequestSearch = event =>{
        // 
        console.log(this.state.dataSource[0]);
        if(this.state.dataSource){
            API.getStocks({
                query:this.state.dataSource[0]
            })
            .then(res =>{console.log(res.data) })
            .catch(err => console.log(err))
        }
    }
    render() {
        return(
            <div className = "container-fluid">
                <Header />
                <SearchBar
                    onChange ={this.handleInputChange}
                    onRequestSearch = {this.handleRequestSearch}
                    style = {{
                        margin:'0 auto',
                        maxWidth:800
                    }}/>
                <ResultsPanel
                ResultsPanel = {this.ResultsPanel}
                 />
                
            </div>
        );
    }
}
export default Dashboard