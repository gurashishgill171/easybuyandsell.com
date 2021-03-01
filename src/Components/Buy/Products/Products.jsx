import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {id: 1, title: 'Shoes', description: 'Running shoes', image: '', price: '₹560', likes: '6'},
    {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: '', price: '₹1200', likes: '15'},
];

const Products = () => {
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
