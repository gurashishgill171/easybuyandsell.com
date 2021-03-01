import React from 'react';
import Products from './Products/Products';
import useStyles from './styles';
import Footer from '../Footer/Footer';

const Buy = () => {
    const classes  = useStyles();

    return (
        <div className={classes.content}>
            <Products />
            <Footer />
        </div>
    )
}

export default Buy
