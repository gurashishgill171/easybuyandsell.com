import React, { useContext, useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import Product from './Product/Product';
import axios from 'axios'
import { AuthContext } from '../../Firebase/currentUser'
import { CenterFocusStrong } from '@material-ui/icons';



const Products = (props) => {

    let number = 1;
    const { products } = useContext(AuthContext)
    const { setproducts } = useContext(AuthContext)
    const { searchProducts } = useContext(AuthContext)
    const isSearch=props.isSearch


    const loadMore=() => {
        number++;
        axios.get("http://localhost:8080/products", { params: { num: number } })
            .then((res) => {
                let items = []
                let x
                for (x in res.data) {
                    items.push({
                        "title": res.data[x].name,
                        "description": res.data[x].description,
                        "image": res.data[x].imageUrl,
                        "price": res.data[x].price,
                        "seller": res.data[x].seller,
                        "phone": res.data[x].phone,
                        "email": res.data[x].email
                    })
                }
                setproducts([...products, ...items])
            })
            .catch((e) => { alert(e) })

    }
    
    

    return (
        <main>
            {isSearch===false?
                <Grid container justify="center" spacing={4}>
                {products.map((product,id) => (
                    <Grid item key={product.id} xs={12} md={6} lg={4}>
                   
                        <Product product={product} id={id} />
                    </Grid>
                ))}
             </Grid>
            :
            <Grid container justify="center" spacing={4}>
                {searchProducts.map((product,id) => (
                    
                    <Grid item key={product.id} xs={12} md={6} lg={4}>
                       
                        <Product product={product} id={id} />
                    </Grid>
                ))}
            </Grid>}
            <Button onClick={loadMore} variant="contained" color="secondary" style={{width:' 100%', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '120px', margin: 'auto', marginBottom: '56px',marginTop: '56px'}}>LoadMore</Button>
        </main>
    )
}

export default Products
