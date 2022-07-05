import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

/**
 * renderiza en el hTML lo del button
 */
//cada vez que hacemos un cambio en el HTML como un usuario, React recarga este archivo, tendriamos que decir solo hazlo una vez
export const GifGrid = ({ category }) => {

    // *** CREANDO UN HOOK PERSONALIZADO ****
    const { images, isLoading } = useFetchGifs( category ); 
   
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)//si isLoadin es true && imprime el <h2>
            } 
            <div className='card-grid'>
            {    //destructuro images con .map, lo agrupo en (image) y lo mando a GifItem
                //mando a GifItem la info del id, y con el operador spread, que son los tres puntos( ... ) esparso toda la info de image
                //al esparcir toda la info, desde el componente GifItem puedo tomar la info que quiera
                images.map( ( image ) => (
                    <GifItem 
                    key={ image.id }
                    { ...image } //operador: spread los tres puntos,esparso toda la info de image
                    />
                ))
            }
            </div>
        </>
    )
}

