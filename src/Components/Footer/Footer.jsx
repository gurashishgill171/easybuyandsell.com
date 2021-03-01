import React from 'react';
import {Container, Grid, IconButton, Typography, Button} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinDropIcon from '@material-ui/icons/PinDrop';
import CallIcon from '@material-ui/icons/Call';
import useStyles from './styles';
import Logo from '../../assets/logo.png';


const Footer = () => {
    const classes = useStyles();
    return (
        <Container className={classes.footerlayout} maxWidth="100%">
            <div className={classes.container}>
                <div className={classes.item}>
                    <Typography  className={classes.title}>SHOP@TIET</Typography>
                        <div className={classes.textwraper}>
                                <div className={classes.info}>
                                    <PinDropIcon/>
                                    <Typography className={classes.subtext}>P.O. Box 32, Bhadson Road, Patiala, Punjab, Pin -147004, India</Typography>
                                </div>
                                <div className={classes.info}>
                                    <CallIcon/>
                                    <Typography className={classes.subtext}>+91-175-2393021</Typography>
                                </div>
                        </div>
                </div>
                <div className={classes.item}>
                    <Typography  className={classes.title}>FOLLOW US ON</Typography>
                    <div className={classes.itemWarper}>
                        <IconButton>
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton>
                            <WhatsAppIcon/>
                        </IconButton>
                    </div>
                </div>
                <div className={classes.item}>
                    <Typography  className={classes.title}>SUPPORT US</Typography>
                    <Button variant="contained">SUPPORT</Button>
                </div>
            </div>
        </Container>
    )
}

export default Footer
