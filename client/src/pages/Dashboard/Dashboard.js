import React, {Component} from "react";
import Header from "../../components/Header"
import SearchBar from 'material-ui-search-bar'

class Dashboard extends Component {
    state = {
        results:[],
        query: ""
    };
    handleInputChange = value =>{
       
       this.setState({
           dataSource:[value]
       });
    };

    handleRequestSearch = event =>{
        console.log("searching");
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
            </div>
        );
    }
}
export default Dashboard