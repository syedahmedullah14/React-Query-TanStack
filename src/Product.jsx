import {
    useMutation,
    useQuery,
  } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import axios from "axios";

  

    const Product = () => {

        const params= useParams();

        const mutation = useMutation({
            mutationFn: (newProduct) => {
                return axios.put("https://dummyjson.com/products/", newProduct)
            },
        });

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
            
            if (mutation.isLoading){
                return <h1>Loading...</h1>
            }
        
            if(mutation.isErrore){
                return <h3>Error: {mutation.error.message}</h3> 
            }
        
            return <div>Product: {product.title}</div>;
            <button onClick={
                () => {
                    mutation.mutate({title: 'Updated product'});
                }
            }>
                    Create Product
            </button>


};

export default Product;