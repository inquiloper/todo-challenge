import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import "material-design-icons/iconfont/material-icons.css";

const TodoList = (props) => {

    const [tasks, updateTasks] = useState(props.tasks)

    useEffect(() => {
        updateTasks(props.tasks)
    }, [props.tasks])

    return (
        <Row>
            <Col>
                <ul id="task-list">
                    {tasks && tasks.map((task, index) => {
                        return (
                            <Row>
                                <Col sm={10}>
                                    <li key={index}>
                                    <label className={task.done ? "done" : ""}>
                                            <input checked={task.done ? true: false} type="checkbox" onClick={() => props.toggleTask(task.id)}/>{task.name}
                                        </label>
                                    </li>
                                </Col>
                                
                                {props.deleteTask && <Col sm={2}>
                                    <span onClick={() => props.deleteTask(task.id)} className="material-icons deleteTaskButton">delete_outline</span>
                                </Col>
                                }
                            </Row>
                        )}
                    )}
                </ul>
            </Col>
        </Row>
    )
}

export default TodoList;