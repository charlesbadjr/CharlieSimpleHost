import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';
import { setFlash } from '../reducers/flash';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser({ email, password, passwordConfirmation }, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <div className="Register_page">
      <Segment basic>
        <Header as="h1" style={{ color: 'white', textAlign: 'center' }}>You get more when you GIVE more </Header>
        
        <Form className="Form_Layout" onSubmit={this.handleSubmit}>
          <Form.Field  >
            <label htmlFor='email'style={{color: "white"}} >Email</label>
            <input
            autoFocus
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='password' style={{color: "white"}} >Password</label>
            <input 
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor='passwordConfirmation'style={{ color: 'white'}}>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Checkbox label="I agree to the terms and conditions" />

          <Segment basic textAlign='center'>
          <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
      </div>
    );
  }
}

export default connect()(Register);
