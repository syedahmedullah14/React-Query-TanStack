import {
    useQuery,
  } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';


  

    const Product = () => {

        const params= useParams();

        const fetchProduct = async () => {
            const response = await fetch('https://dummyjson.com/products/${params.productId}');
            const data = await response.json();
            return data.products;
        };
         
            const {
            isLoading, 
            error, 
            data: product,
            } = useQuery({ queryKey: ['product', params.productId], queryFn: fetchProduct, 
            // staleTime: 10000,
            })
            
            if (isLoading){
                return <h1>Loading...</h1>
            }
        
            if(error){
                return <h3>Error: {error.message}</h3> 
            }
        
            return <div>Product: {product.title}</div>;


};

export default Product;