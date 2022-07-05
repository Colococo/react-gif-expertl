// ** no hace falta importar React porque ya esta en la parte global en el archivo: vite.config.ja
//import React from 'react'
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';// los importa desde components, por default los busca en index.js

 //inicializamos el arreglo ['One Punch'] del useState
 /**
* Pantalla principal de la Gif App
*/
export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['One Punch']);
    //insertar Valorant en li, al hacer click en button llamamos la funcion onAddCategory,ejecuta setCategories,
    // levanta los valores ... de categories y agrega Valorant, al ponerlo antes de los 3 puntos ... aparecera primero en la lista en el HTML
    const onAddCategory = (newCategory) => {
        //antes de pasar el valor de la nueva categoria lo validamos para que no se repita
        //si categories incluye el valor de newCategory (existe).. return(que no haga nada)
        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            {/*  titulo  */}
            <h1>GifExpertApp</h1>
            {/* input */}
            {/* setCategories es una propiedad de AddCategory con la funcion: setCategories del useState  */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            //  setCategories={setCategories} 
            />
            {/* listado de gif */} 
            {/* renderizamos categories con varios elementos con .map: lee cada elemento y lo regresa al parametro category*/}
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />

                ))
            }
               {/* gif item */}
        </>         
    )
}


