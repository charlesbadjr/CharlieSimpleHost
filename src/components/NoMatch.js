import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Image } from 'semantic-ui-react';
import { NoMatchError } from './Styles/NoMatchError.gif'

class NoMatch extends Component {
  render() {
    return (
    <div className="Page_404" >
        <h1> " Page Not Found " </h1>
         <div>
             <Image src={NoMatchError} alt="Dr. Evil" height="200" width="350" />
              <p> Go...
              <a href="javascript:history.back()">Back</a>
              <p> Or </p>
                <Link to="/"> start over... </Link>

              </p>
          </div>   
    </div>

    );
  }
}

export default NoMatch;
