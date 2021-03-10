import React,{useContext, useState} from 'react';
import useStyles from './styles';
import ImageSlider from '../Checkout/ImageSlider/ImageSlider';
import Navbar from '../Navbar/Navbar';
import {Grid, IconButton, Paper, Typography} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {AuthContext} from '../Firebase/currentUser'
import { useLocation } from 'react-router';


// const images = ['https://source.unsplash.com/RyRpq9SUwAU/1600x900',
//                 'https://source.unsplash.com/ULmaQh9Gvbg/1600x900',
//                 'https://source.unsplash.com/TMOeGZw9NY4/1600x900',
//                 'https://source.unsplash.com/yXpA_eCbtzI/1600x900',
//                 'https://source.unsplash.com/ULmaQh9Gvbg/1600x900',
//             ]

const Checkout = (props) => {
    const classes = useStyles();
    const {products}=useContext(AuthContext)
    const {currentUser}=useContext(AuthContext)
    const location=useLocation()
    const i=location.state.id
    return (
        <>
           {console.log(location)}
            <Navbar />
          
            <div className={classes.main}>
                <div className={classes.slider}>
                    <ImageSlider images={products[i].image} />
                </div>
                <div className={classes.info}>
                    <Paper className={classes.paper} elevation={4}>
                    <Typography className={classes.heading}>Product description</Typography>
                        <div className={classes.sellerinfo}>
                            <Typography className={classes.title}>{products[i].title}</Typography>
                            <Typography className={classes.price}>{products[i].price}</Typography>
                            <p className={classes.description}>{products[i].description} </p>
                        </div>
                    </Paper>
                    <Paper className={classes.paper} elevation={4}>
                        <Typography className={classes.heading}>Seller description</Typography>
                        <div className={classes.sellerinfo}>
                            <Typography className={classes.title2}>{products[i].seller}</Typography>
                            <Typography className={classes.title2}>Thapar Institute Of Engineering and Technology</Typography>
                            <div className={classes.heading2}>
                                <PhoneIcon style={{marginRight: '5px'}}/>
                                <p>{products[i].phone}</p>
                            </div>
                            <div className={classes.heading2}>
                                <EmailIcon style={{marginRight: '5px'}}/>
                                <p>{products[i].email}</p>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Checkout