import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import { getNotifications } from '../reducers/notification'


class NavBar extends Component {


  componentDidMount() {
    const { dispatch, user} = this.props
    if (user){
      dispatch(getNotifications(user))
    } 
  }


  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (     
          
                <Menu.Menu className="navBar_logedIn">
                  <Link to="/Profile">
                      <Icon name='user'/>Profile|
                  </Link>
              
            
              <Link to="#" onClick={ () => dispatch(handleLogout(history))}>
                Logout
              </Link>
              </Menu.Menu>
          
      
      );
    } 
    else
     return (
          <Menu.Menu className="navBar_logedOut_right" >

               <Link to="/Login">
                  Login
               </Link>
          </Menu.Menu>
    );
  }

render() {
  return  (
    <div className="navbar">
    <Menu.Menu className="navBar_logedOut_left">

          <Link to="/">
                Charlie|   
          </Link>  
        
        
          <Link to="/Todo" >
            Projects|
          </Link>
       
        
          <Link to="/Contact" >
            Contact|
          </Link>
      
          <Link to="/PayMe" >
            Donate
          </Link>
          
      </Menu.Menu>
      <Menu.Menu className="navBar_logedOut_right">
         { this.rightNavs() }
      </Menu.Menu>
   </div>
  );
  }
}


const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
