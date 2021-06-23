import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

function ShoopingItems({cart,setCart}) {
    const URL = `https://fakestoreapi.com`;
    const ratings = [4,5,5,4,4,5,5,5,3,4,4,3,5,5,5,5,4,3,4,4];

    const [products,setProducts] = useState([]);
    useEffect(async () => {
        await axios.get(`${URL}/products`)
        .then(response => setProducts(response.data))
    }, [])
    return (
        <div className="container">
            {console.log(products)}
            <div class="all-products">
            {
                products.map((product,index) => {
                    return <ProductCard key={product.id} product = {product} cart={cart} setCart= {setCart} rating = {ratings[index] } />
                })
            }
        </div>
        </div>
    )
}

export default ShoopingItems
