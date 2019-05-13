import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Charlie_face from './Styles/Charlie_face.jpg';
import axios from 'axios';


// link to from react router dom. Give skydive video.

class Home extends Component {
  state = { activities: [] }

  componentDidMount() {
    axios.get('/passtimes')
      .then( res => this.setState({ activities: res.data }) )
  }
// { this.state.activities.map( (fun, i) => fun <div key={i}  /> )}

  render() {

    return (
      
      <div className="homeScreen"> 
        <div className="animationBox">
            <div className="charlieFade"> Charlie Jergins </div>
            <div className="charlieSecondFade"> Web Developer </div>
            <div className="charlieThirdFade"> Creative Guru </div>
        </div> 
        <Image src={Charlie_face} className="Face" alt="My ugly mug"/>
        <div className="likebox">
        <h2 text-align="center"> Things I Enjoy: </h2>
          <ul className="likeList" > 
             <li> Skydiveing </li>
             <li> SnowBoarding </li>
             <li> React Apps </li>
             <li> Creating Narritives from Data </li>
             <li> Trading in the Forex Market </li>   
          </ul>  
        </div>
      </div>
    );
  }
}

export default Home;