import React from 'react';
import useStyles from './styles';
import ImageSlider from '../Checkout/ImageSlider/ImageSlider';
import Navbar from '../Navbar/Navbar';
import {Grid, Paper, Typography} from '@material-ui/core';



const images = ['https://source.unsplash.com/RyRpq9SUwAU/1600x900',
                'https://source.unsplash.com/ULmaQh9Gvbg/1600x900',
                'https://source.unsplash.com/TMOeGZw9NY4/1600x900',
                'https://source.unsplash.com/yXpA_eCbtzI/1600x900',
                'https://source.unsplash.com/ULmaQh9Gvbg/1600x900',
            ]

const Checkout = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Grid conatiner direction="row" justify="center" alignItems="center">
                <Grid item xs={12} md={6} className={classes.slider}>
                    <ImageSlider images={images}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper>
                        <Typography>Product description</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Checkout
