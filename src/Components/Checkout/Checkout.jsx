import React from 'react';
import useStyles from './styles';
import ImageSlider from '../Checkout/ImageSlider/ImageSlider';
import Navbar from '../Navbar/Navbar';
import {Grid, IconButton, Paper, Typography} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';



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
            <div className={classes.main}>
                <div className={classes.slider}>
                    <ImageSlider images={images}/>
                </div>
                <div className={classes.info}>
                    <Paper className={classes.paper} elevation={4}>
                    <Typography className={classes.heading}>Product description</Typography>
                        <div className={classes.sellerinfo}>
                            <Typography className={classes.title}>Jeep</Typography>
                            <Typography className={classes.price}>₹ 3,98,000</Typography>
                            <p className={classes.description}>Jain modified Jeep available On Order_Book Now_Delivered all india</p>
                        </div>
                    </Paper>
                    <Paper className={classes.paper} elevation={4}>
                        <Typography className={classes.heading}>Seller description</Typography>
                        <div className={classes.sellerinfo}>
                            <Typography className={classes.title2}>Gurashish Gill</Typography>
                            <Typography className={classes.title2}>Thapar Institute Of Engineering and Technology</Typography>
                            <div className={classes.heading2}>
                                <PhoneIcon style={{marginRight: '5px'}}/>
                                <p>972975418</p>
                            </div>
                            <div className={classes.heading2}>
                                <EmailIcon style={{marginRight: '5px'}}/>
                                <p>ggill_be19@thapar.edu</p>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Checkout