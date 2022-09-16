import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChanges = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
       // setCategories( categories => [...categories, inputValue] )
        onNewCategory( inputValue.trim());
        setInputValue('');
        //setCategories(...... inputvalue)
    }
 
 
 
    return (
        <form onSubmit={  onSubmit}>

            <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChanges}
            // onChange={(event) => onInputChanges(event)}
            />
        </form>
  )
}
