import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();

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
                    <div className={classes.cardactionitem1}>
                    <IconButton>
                        <ThumbUpIcon/>
                    </IconButton>
                    <Typography variant="subtitle2">{product.likes}</Typography>
                    </div>
                    <div className={classes.cardactionitem2}>
                    <Typography variant="subtitle2">ADD TO CART</Typography>
                    <IconButton aria-label="Add to cart">
                        <AddShoppingCartIcon/>
                    </IconButton>
                    </div>
                </CardActions>
            </Card>
        </>
    )
}

export default Product
