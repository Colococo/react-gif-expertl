import { useState } from 'react';

/**
 * AddCategory: formulario y validizaciones 
 */
//le paso los valores de setCategories que es lo que agregamos en el form del HTML a la funcion AddCategoy
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();
                        //destructuro el target del evento del onChange
    const onInputChange = ({ target }) => {
        
        setInputValue( target.value );//le paso el valor que escribo en el HTML en el onChange a setInputValue
    }

    const onSubmit = (event) => {
        event.preventDefault();//cada vez que hacemos un enter en un formulario este refresca el HTML, para prevenir esto usamos la funcion: preventDefault()
        //esta consigna dice que borre los inputValue si es menor o igual a un caracter
        if( inputValue.trim().length <= 1 ) return;//para que no imprima los enter vacios o solo una letra
        //usamos las categories que ya estan escritas y le agregamops con un arrayfunction el nuevo valor(inputValue) seguido ...categories (de las categories que ya estaban)
        //setCategories(categories => [ inputValue, ...categories]);
        setInputValue('');//con un string vacio para limpiar el setInputValue 
        onNewCategory( inputValue.trim() );
    }

    return(
        //cuando hay un evento en el formulario llamamos la funcion: onSubmit(la que esta en azul, son funciones que creamos nos, el nombre lo ponemos nos)
        <form onSubmit={ onSubmit } >
            <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue } //el valor del input es el valor del inputValue, para poder cambiarlo hay que agregar onChange
            onChange={ onInputChange } //el evento onChange llamo a la funcion onInputChange
            />
        </form>
        
    )
}