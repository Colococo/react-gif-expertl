import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// un hooks es una funcion que regresa algo
// creando un hooks personalizado: useFetchGifs
// este hooks regresa(return) un objeto

//las imagenes estan dentro del hooks, caen dentro del State del useState
/**Acceso a las imagenes con : category*/
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);//ponemos true porque esta cargando

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);// false porque ya cargo las imagenes
    }
    // useEffect: cuando ocurre un evento, disparamos un cambio. 
    // Llamamos la funcion getImages. En este caso no queremos disparar nada, por eso ponemos al final del useEffect corchetes vacios[]
    // Solo queremos que se muestre una vez lo que tipeamos en el button(category)
    useEffect( () => {
        getImages();
    }, []) 
    //corchetes cuadrados vacios porque no queremos que se ejecute nada, de esta manera el HTML solo aparecera una vez lo del button

    return {
        images: images,
        isLoading: isLoading
    } 

}
