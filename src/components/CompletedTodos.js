import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import TodoList from './TodoList';

const CompletedTodos = (props) => {
    return (
        <>
            <Row>
                <Col>
                    <TodoList deleteTask={props.deleteTask} tasks={props.tasks}/>
                </Col>
            </Row>
            {props.tasks && props.tasks.length > 0 && 
                <Row>
                    <Col className=" d-flex justify-content-end">
                        <Button onClick={() => props.deleteAllCompletedTask()} variant="danger">delete all</Button>
                    </Col>
                </Row>
            }
        </>
    )
}

export default CompletedTodos;