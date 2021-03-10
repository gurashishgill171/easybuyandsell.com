import React,{useEffect,useState} from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import axios from 'axios'


// const products = [
//     {id: 1, title: 'Shoes', description: 'Running shoes', image: '', price: '₹560'},
//     {id: 1, title: 'Shoes', description: 'Running shoes', image: '', price: '₹560'},
//     {id: 1, title: 'Shoes', description: 'Running shoes', image: '', price: '₹560'},
//     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: '', price: '₹1200'},
//     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: '', price: '₹1200'},
//     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: '', price: '₹1200'},
//     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: '', price: '₹1200'},
//     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: '', price: '₹1200'},
// ];


  
const Products = () => {

    let number=1;
     const [products, setproducts] = useState([  {id: 1, title: 'Shoes', description: 'Running shoes', image: [], price: '₹560'},
     {id: 1, title: 'Shoes', description: 'Running shoes', image: [], price: '₹560'},
     {id: 1, title: 'Shoes', description: 'Running shoes', image: [], price: '₹560'},
     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200'},
     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200'},
     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200'},
     {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200'},])


    useEffect(() => {
        axios.get("http://localhost:8080/products",{params:{num:number}})
             .then((res)=>{
                 let items=[]
                 let x
                 for(x in res.data){
                     items.push({"title":res.data[x].name,
                      "description":res.data[x].description,
                      "image":res.data[x].imageUrl,
                      "price":res.data[x].price})  
                 }
                 setproducts([...products,...items])
             })
             .catch((e)=>{alert(e)})
  
    }, [number])



    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} md={6} lg={4}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
