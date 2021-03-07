import React from 'react';
import useStyles from './styles';
import ImageSlider from '../Checkout/ImageSlider/ImageSlider';
import Navbar from '../Navbar/Navbar';
import {Grid} from '@material-ui/core';



const images = [{url :'https://source.unsplash.com/RyRpq9SUwAU/1600x900'},
                {url :'https://source.unsplash.com/BeOW_PJjA0w/1600x900'},
                {url :'https://source.unsplash.com/TMOeGZw9NY4/1600x900'},
                {url :'https://source.unsplash.com/yXpA_eCbtzI/1600x900'},
                {url :'https://source.unsplash.com/ULmaQh9Gvbg/1600x900'}
            ]

const Checkout = () => {
    const classes = useStyles();
    return (
        <>
            {/* <Navbar /> */}
                <div className={classes.sliderContainer}>
                    <ImageSlider images={images}/>
                </div>
        </>
    )
}

export default Checkout
