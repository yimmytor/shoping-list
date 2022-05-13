import useGetCollection from '../../hooks/useGetCollection';

const ProductList = () => {    
    const productList = useGetCollection('articulo');
    
    return (
        <>
            
            <h1> Lista de Productos:</h1>            

            
            {productList ? 
                <ul>                    
                    {productList.map((product)=><li key={product.idArticulo}>{product.descripcion + "-" + product.marca}</li>)}
                </ul>
                :
                <span>Cargando...</span>
            }
        </>
    )
}

export default ProductList;

