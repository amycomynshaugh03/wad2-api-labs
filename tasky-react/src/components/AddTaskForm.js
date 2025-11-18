import React from 'react';

const AddTaskForm = ({ submit, change, formState }) => {
    return (
        <form onSubmit={submit} className="task-form">
            <h2>Add New Task</h2>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formState.title}
                onChange={change}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formState.description}
                onChange={change}
            />
            <input
                type="date"
                name="deadline"
                value={formState.deadline}
                onChange={change}
            />
            <select name="priority" value={formState.priority} onChange={change}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;