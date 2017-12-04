import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { BrowserRouter, Route, Link } from 'react-router-dom'


const styles = {
    title: {
      cursor: 'pointer',
    },
  };



// const rightButtons = (
//     // <div className="appBarIcons">
//     //     {/* <Link href="/">
//     //     <FlatButton label="SignUp" style={styles}/>
//     //     </Link> */}
//     //     {/* <Link href="/Signin"> */}
//     //         <FlatButton label="Login" style={styles}/>
//     //     </Link> */}
//     // </div>
// );


    
    class Header extends React.Component {
        
            render(){
                return (
                    <div>
                        <MuiThemeProvider>
                            <div>
                             <AppBar
                                title="ApplicationLanding"
                                iconClassNameRight="muidocs-icon-navigation-expand-more"
                                // iconElementRight={rightButtons}
                              />
                            </div>
                        </MuiThemeProvider>
                    </div>
                )
            }   
        }

export default Header;