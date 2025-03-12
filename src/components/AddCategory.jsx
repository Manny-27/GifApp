import { useState } from "react"

export default function AddCategory( {onNewCategory}) {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() <=1 ) return;

        // setCategory( category => [inputValue, ...category ]);
        onNewCategory(  inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gift" 
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
