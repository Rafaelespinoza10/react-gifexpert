
import { useState } from 'react';

export function AddCategory({ onNewCategory }) {

  const [inputValue , setinputValue ] = useState();

  const onInputChange =(event)=>{
      setinputValue( event.target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();

    const newInputValue = inputValue.trim();
    if(newInputValue.length <= 1 ) return;
    setinputValue('');
    onNewCategory(newInputValue);
  }

  return (
    <>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    </>
)
}
