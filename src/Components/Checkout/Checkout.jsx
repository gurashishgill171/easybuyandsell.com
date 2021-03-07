import React from 'react';
import useStyles from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { IconButton } from '@material-ui/core';


const images = ['https://source.unsplash.com/RyRpq9SUwAU/1600x900','https://source.unsplash.com/BeOW_PJjA0w/1600x900','https://source.unsplash.com/TMOeGZw9NY4/1600x900','https://source.unsplash.com/yXpA_eCbtzI/1600x900','https://source.unsplash.com/ULmaQh9Gvbg/1600x900']

const Checkout = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.SlideContainer}>
                <div className={`${classes.slide} ${classes.current}`}>
                        <div className={classes.content}>
                            <h2>Slide 1</h2>
                            <img src={images[0]} className={classes.img}></img>
                        </div>
                </div>
                <div className={(classes.slide)}>
                        <div className={classes.content}>
                            <h2>Slide 2</h2>
                            <img src={images[1]} className={classes.img}></img>
                        </div>
                </div>
                <div className={(classes.slide)}>
                        <div className={classes.content}>
                            <h2>Slide 3</h2>
                            <img src={images[2]} className={classes.img}></img>
                        </div>
                </div>
                <div className={(classes.slide)}>
                        <div className={classes.content}>
                            <h2>Slide 4</h2>
                            <img src={images[3]} className={classes.img}></img>
                        </div>
                </div>
                <div className={(classes.slide)}>
                        <div className={classes.content}>
                            <h2>Slide 5</h2>
                            <img src={images[4]} className={classes.img}></img>
                        </div>
                </div>

                <div className={classes.btns}>
                    <IconButton id="prev" className={classes.btnPrev}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <IconButton id="next" className={classes.btnNext}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </div>
            </div>
            
        </>

    )
}

export default Checkout

// <div className={(classes.shiny, classes.round)}>
//     i'm shiny and round.
// </div>