import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';


const styles = {
    title: {
      cursor: 'pointer',
    },
  };



// const rightButtons = (
//     <div className="appBarIcons">
//         <Link href="/dashboard">
//         <FlatButton label="dashboard" style={styles}/>
//         </Link>
//         <Link href="/saved">
//             <FlatButton label="saved" style={styles}/>
//         </Link> 
//     </div>
// );


    
    class Header extends React.Component {
        
            render(){
                return (
                    <div>
                        <MuiThemeProvider>
                            <div>
                            <AppBar
                            title={<span >Bling Stocks</span>}
                            // onTitleClick={handleClick}
                            // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                            iconElementRight={
                            <div>
                                <Link to ="/dashboard"><FlatButton label="dashboard" /></Link>
                                <Link to ="/saved"><FlatButton label="Saved" /></Link>
                                </div>
                                
                            }
                            />
                            </div>
                        </MuiThemeProvider>
                    </div>
                )
            }   
        }

export default Header;