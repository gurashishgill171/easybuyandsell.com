import React from 'react';
import {IconButton, Typography, Button} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import useStyles from './styles';
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerContainer}>
            <div className={classes.logo}>
                <img src={Logo} style={{width: '289px', height: 'auto'}}/>
            </div>
            <div className={classes.links}>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary">HOME</Typography>
                </div>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary">BUY</Typography>
                </div>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary">SELL</Typography>
                </div>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary">SIGN UP</Typography>
                </div>
            </div>
            <div className={classes.socialLinks}>
                <div className={classes.flex}>
                    <Typography className={classes.titles} color="primary">FOLLOW US</Typography>
                    <IconButton>
                        <a href="https://www.linkedin.com/in/gurashish-gill-6516b41b6">
                        <LinkedInIcon fontSize="large" color="primary"/>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.instagram.com/gurashish_gill_18/">
                        <InstagramIcon fontSize="large" color="primary"/>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://google.com">
                        <WhatsAppIcon fontSize="large" color="primary"/>
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Footer
