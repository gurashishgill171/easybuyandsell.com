import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import Checkout from '../../../Checkout/Checkout';

const Product = ({ product }) => {
    const classes = useStyles();

    const handleCheckout = (product) => {
        <Checkout product={product}/>
    }

    return (
        <>
            <div className={classes.toolbar}/>
            <Card className={classes.root}>
                <CardMedia image={product.image} title={product.title} className={classes.media}/>
                <CardContent>
                    <div className={classes.cardcontent}>
                        <Typography variant="h5" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="h6">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="subtitle1">{product.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardactions}>
                    <div className={classes.cardactionitem2}>
                        <Button 
                        variant="contained"
                        onClick={()=>handleCheckout(product)}
                        >Checkout</Button>
                    </div>
                </CardActions>
            </Card>
        </>
    )
}

export default Product
