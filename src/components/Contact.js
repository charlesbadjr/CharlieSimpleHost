import React, { Component } from 'react';
import { Header, Segment, Form, Button, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';


class Contact extends Component {
  state = { first_Name: '', last_Name: '', company_Name: '', email: '', phone: '', message: '' };

  contactInfo = React.createRef(); 

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { first_Name, last_Name, company_Name, email, phone, message } = this.state;
    // 
    // clear form
  }
 
  tattleTale = () => {
    
  }

  render() {
    const { first_Name, last_Name, company_Name, email, phone, message } = this.state;
  
    return (
      <div className="Login_page">
      <Segment basic>
      <Header as="h1" style={{ color: 'white', textAlign: 'center' }}> Write Me: </Header>
        
        <Form className="Form_Layout" onSubmit={this.handleSubmit}>
          
          <Form.Field >
            <label htmlFor='Name' style={{color: "white"}} >First Name</label>
            <input 
              required
              id='first_Name'
              ref={this.contactInfo}
              value={first_Name}
              placeholder='First Name'
              onChange={this.handleChange}
            />
          </Form.Field>
          
          <Form.Field >
            <label htmlFor='name' style={{color: "white"}} >Last Name</label>
            <input 
              required
              id='last_Name'
              ref={this.contactInfo}
              value={last_Name}
              placeholder='last_Name'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='text' style={{color: "white"}} >Company Name</label>
            <input 
              id='company_Name'
              ref={this.contactInfo}
              value={company_Name}
              placeholder='Company'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='email' style={{color: "white"}} >Email</label>
            <input 
              required
              id='email'
              ref={this.contactInfo}
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='phonenumber' style={{color: "white"}} >Phone</label>
            <input 
              required
              id='phone'
              ref={this.contactInfo}
              value={phone}
              placeholder='Phone Number'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='textarea' style={{color: "white"}} >Message</label>
            <TextArea
              
              id='message'
              ref={this.contactInfo}
              value={message}
              autoHeight
              rows = {8}
              placeholder='Enter your Message Here:'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
    </Segment>

  </div>
  

        );
  }
}

export default connect()(Contact);
