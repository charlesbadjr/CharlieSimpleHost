import React, { Component } from 'react';
import { Header, Segment, Form, Button, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../reducers/user';
import { Link, withRouter } from 'react-router-dom'

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin({ email, password }, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login_page">
      <Segment basic>
      <Header as="h1" style={{ color: 'white', textAlign: 'center' }}>Welcome Back </Header>
        
        <Form className="Form_Layout" onSubmit={this.handleSubmit}>
          <Form.Field >
            <label htmlFor='email' style={{color: "white"}} >Email</label>
            <input 
              autoFocus
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='password'style={{color: "white"}} >Password</label>
            <input 
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      
        <div > 
          <Link to='/Register'>
             <Menu.Item as="h3" name="Sign Up Here" />
          </Link>
        </div>

      </Segment>
    </div>

    );
  }
}

export default connect()(Login);
