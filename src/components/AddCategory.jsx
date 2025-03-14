import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        onAddCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type        = "text"
                placeholder = "Buscar"
                value       = { inputValue }
                onChange    = { (event) => onInputChange(event) }
            />
        </form>
    )
}