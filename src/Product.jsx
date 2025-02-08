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
         
        const Products = () =>{
            const {
            isLoading, 
            error, 
            data: products,
            } = useQuery({ queryKey: ['product', params.productId], queryFn: fetchProduct, 
            // staleTime: 10000,
            })
            return <div>Products</div>;


};
    }
export default Product;