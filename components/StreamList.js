import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'streamlist_entries';

const StreamList = () => {
    const [inputValue, setInputValue] = useState('');
    const [entries, setEntries] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            setEntries(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
    }, [entries]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setEntries([...entries, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        setEntries(entries.filter((_, i) => i !== index));
        if (editIndex === index) {
            setEditIndex(null);
            setEditValue('');
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(entries[index].text);
    };

    const handleEditChange = (event) => {
        setEditValue(event.target.value);
    };

    const handleEditSubmit = (index) => {
        const updatedEntries = entries.map((entry, i) =>
            i === index ? { ...entry, text: editValue } : entry
        );
        setEntries(updatedEntries);
        setEditIndex(null);
        setEditValue('');
    };

    const handleComplete = (index) => {
        const updatedEntries = entries.map((entry, i) =>
            i === index ? { ...entry, completed: !entry.completed } : entry
        );
        setEntries(updatedEntries);
    };

    return (
        <div className="streamlist-container">
            
            <h1>Stream List</h1>
            <form className="streamlist-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    placeholder="Add a new Movie"
                />
                <button type="submit" disabled={inputValue.trim() === ''}>Submit</button>
            </form>
            <ul className="streamlist-list">
                {entries.length === 0 ? (
                    <li>No entries yet.</li>
            ) : (
                 entries.map((entry, index) => (
                    <li key={index} style={{ textDecoration: entry.completed ? 'line-through' : 'none' }}>
                        {editIndex === index ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editValue} 
                                    onChange={handleEditChange}
                                    autoFocus
                                />
                                <button onClick={() => handleEditSubmit(index)}>Save</button>
                                <button onClick={() => setEditIndex(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span>{entry.text}</span>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                <button onClick={() => handleComplete(index)}>
                                    {entry.completed ? 'Undo' : 'Complete'}
                                </button>
                            </>
                        )}
                    </li>
                ))
            )}
            </ul>
        </div>
    );
};

export default StreamList;
