import { useState } from "react";

useState

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('Metroid');

    const onInputChange = ({target:{value}}) => {
        setInputValue( value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue( '' );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
            type="text"
            placeholder="Buscar gifts"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
  )
}
