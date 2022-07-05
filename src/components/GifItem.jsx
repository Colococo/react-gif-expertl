

// destructuro title, url porque viene la info de GifGrid esparcido ...image
/**
 * Extraigo: titulo, url, id. Lo usa: GifGrid
 */
export function GifItem( { title, url, id} ) {
    
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
