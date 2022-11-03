import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory })=>{

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return; 
        onNewCategory(inputValue.trim());
        setInputValue(''); 
    }

    return (
        <form onSubmit={ (event) => {onSubmitForm(event)} }>
            <input 
                type="text" 
                placeholder='Buscar Gif' 
                value={inputValue}
                onChange={ onInputChange }   
            />
        </form>
    )
}

