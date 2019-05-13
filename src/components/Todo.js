import React, { Component } from 'react';
import {Form, 
  Header,  
  List, 
  Input, 
  Segment } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
  import axios from 'axios-on-rails';




  class Todo extends Component {
    state = { name: '', todos: [] }
  
    componentDidMount() {
      axios.get(`api/todos`)
      .then( ({ data: todos }) => this.setState({ todos}) )
    }
  
    handleSubmit = e => {
       e.preventDefault();
      const { name, todos } = this.state;
      axios.post(`/api/todos`, {name})
      .then( ({ data }) => {
        this.setState({ todos: [data, ...todos], name: '' })
      })
    }
  
    updateTodo = id => {
      axios.put(`/api/todos/${id}`)
      .then( ({ data }) => {
        const todos = this.state.todos.map( todo => {
          if (todo.id === id )
          return data
          return todo
        });
  
        this.setState({ todos });
      });
    }
  
    render() {
      const { name, todos} = this.state;
      return (
      <div className="todo_Page" >
  
        
          <Header as="h1" style={{ color: 'white', textAlign: 'center' }}>What I'm working on: </Header>
         
          <Form className="Form_Layout" onSubmit={this.handleSubmit}>
            <Input 
              label="Add Item"
              required
              value={name}
              placeholder="Remember to..."
              onChange={ e => this.setState({name: e.target.value }) }
              />
          </Form>
          
          <Segment inverted>
         <a> Project lists: </a>
           <List divided inverted relaxed>
             <List.Content>
               <List.Header className="todo_list">
                   { todos.map( todo =>
                    <List.Item
                    Key={todo.id}
                    
                    onClick={ () => this.updateTodo(todo.id) }>
                    {todo.name}
                    </List.Item>
                    )
                    }
               </List.Header>
            </List.Content> 
           </List>
         </Segment>
     
        <div className="finished_Projects">
        <Header as="h1" style={{ color: 'white', textAlign: 'center' }}>Charlie's Finished Projects</Header>
        <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header>
          <a href={`http://www.LindsayJungst.com`} target="_blank" rel="noopener noreferrer"> Lindsay Jungst Landing Page </a>
           </List.Header>
          This is a landing page with a simple countdown to Lindsay's Birthday. It also gave me a chance to play with SEO settings.
        </List.Content>
      </List.Item>
    
      <List.Item>
        <List.Content>
          <List.Header>
          <Link to="/family"> 
               Family
            </Link> 
          </List.Header>
          Found myself a cute little family
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            <a href={`https://vibrant-albattani-e64810.netlify.com/`} target="_blank" rel="noopener noreferrer"> Black Jack App </a>
           </List.Header>
          Programable Web had a great card api. I used to to set up my black jack game.
        </List.Content>
      </List.Item>
    </List>
  </Segment>
        
        </div>
      
      </div>
    );
  }
}



export default Todo;

