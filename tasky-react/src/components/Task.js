import React from 'react';

const Task = ({ title, description, deadline, done, priority, markDone, deleteTask }) => {
    return (
        <div className={`task ${done ? 'done' : ''}`} style={{ borderLeft: `5px solid ${priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}` }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Due: {deadline}</p>
            <p>Priority: {priority}</p>
            <div className="task-actions">
                <button onClick={markDone}>
                    {done ? 'Mark Not Done' : 'Mark Done'}
                </button>
                <button onClick={deleteTask} className="delete">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Task;