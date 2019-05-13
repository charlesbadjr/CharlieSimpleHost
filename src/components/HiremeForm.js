
import React, { Component } from 'react'
import { Form, button } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class hireMeForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Sirname' placeholder='Sirname' />
          <Form.Input fluid label='Company' placeholder='Company' />
          <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
       
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label='Small'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Large'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
       
        <Form.TextArea label='About' placeholder='Tell me more about your project' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Fingers Crossed</Form.Button>
      </Form>
    )
  }
}  

  export default hireMeForm;
