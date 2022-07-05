import React from 'react';
const ToDolist = (props) => {
 
    return (
        <>
            <div className="todo_style">

            <i className="fa-regular fa-square-xmark" onClick={() =>{
              props.onSelect(props.id);
            }} >

            </i>
            <li>{props.text}</li>
            </div>

        </>
    );
};

export default ToDolist;