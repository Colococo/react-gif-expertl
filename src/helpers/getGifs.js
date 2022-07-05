//al final de la url ponemos & limite 20 imagenes
/**
 *obtiene la appi, relaciona en la busqueda ${ category } 
 */
export const getGifs = async ( category ) => {                    // *** IMPORTANTE: &q= es para que busque, le ponemos: ${ category } 
    const url =`https://api.giphy.com/v1/gifs/search?api_key=hoFzh78Ii7NAqsodEvJnhyGJpxmNtIM2&q=${ category }&limit=20`
    const resp = await fetch( url );
    const { data } = await resp.json(); //destructuramos la data que viene del resp.json, con un console.log nos regresa 50 imagenes de data
    //creo una variable gifs, leo con map la info de la data y extraigo: id, etc 
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url //es una propiedad que tienen las imagenes estas...de esta api
    }) );

    return gifs;
}