import React from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { Row, Col} from 'react-bootstrap';

const ActiveTodos = (props) => {
    
    return (
        <>
            <Row>
                <Col>
                    <NewTodo addTask={props.addTask} />
                    <TodoList toggleTask={props.toggleTask} tasks={props.tasks}></TodoList>
                </Col>
            </Row>
        </>
    )
}

export default ActiveTodos;