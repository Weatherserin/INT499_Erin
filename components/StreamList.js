import React, { useState } from 'react';

const StreamList = () => {
    const [inputValue, setInputValue] = useState('');
    const [entries, setEntries] = useState([]);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setEntries([...entries, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>Stream List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

export default StreamList;