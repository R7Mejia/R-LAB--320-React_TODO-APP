import React, { useState } from 'react';
import { ACTIONS } from '../App';

function Todo({ todo, dispatch }) {
    const [editedText, setEditedText] = useState(todo.title);

    const handleEdit = () => {
        dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id, text: editedText } });
        setEditedText(todo.title); // Reset edited text after dispatching the edit action
    };

    const handleSave = () => {
        dispatch({ type: ACTIONS.SAVE_TODO, payload: { id: todo.id } });
    };

    const handleDelete = () => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
    };

    return (
        <>
            <input  type='checkbox' />
            <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
            
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
            <br />
        </>
    );
}

export default Todo;
