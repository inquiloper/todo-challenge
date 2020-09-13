import React from 'react'
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const AllTodos = (props) =>  {
    return (
        <>
            <NewTodo addTask={props.addTask} />
            <TodoList tasks={props.tasks} toggleTask={props.toggleTask}/>
        </>
    )
}

export default AllTodos;