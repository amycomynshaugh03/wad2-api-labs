import React from 'react';

const Task = (props) => {

    let priorityColor;

    switch (props.priority) {
        case "High":
            priorityColor = "#FF4C4C"; 
            break;
        case "Medium":
            priorityColor = "#FFD700"; 
            break;
        case "Low":
            priorityColor = "#4CAF50"; 
            break;
        default:
            priorityColor = "#5BB4C4"; 
    }

    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <button 
                className="priorityButton" 
                style={{ backgroundColor: priorityColor }}
            >
                {props.priority}
            </button>

            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
}

export default Task;
