import React from 'react';
import { setFlash } from '../reducers/flash';
import { HiremeForm } from 'hireMeForm';



class HireMe extends React.Component {
  // flash message
  componentDidMount(){
    dispatch(setFlash("Don't Fuck with me, Mother Fucker", "red"));
  }
  
    render () {
     return (
        <div className="Hire_me">
          <p> Hey Look </p>
          <div >
           { HiremeForm }
          </div>
       </div>
    );
  } 
}



export default HireMe;
