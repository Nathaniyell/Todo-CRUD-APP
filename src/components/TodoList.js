import React, { useContext, useState } from 'react';
import { TodosContext } from '../App';
import { Table, Form, Button } from 'react-bootstrap';

function ToDoList() {
const [todoText, setTodoText] = useState('')
function handleSubmit(event){
    event.preventDefault()
}

    // receive state and dispatch from index.js
    const { state, dispatch } = useContext(TodosContext);
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter To Do"
                        onChange={event => setTodoText(event.target.value)} 
                        value={todoText} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>   
                </Form> <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>To Do</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.text}</td>
                                <td>Edit</td>
                                <td onClick={() => dispatch({ type: 'delete', payload: todo })}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
    )
}
export default ToDoList;