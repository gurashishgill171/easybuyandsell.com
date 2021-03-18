import React from 'react';
import {IconButton, Typography, Button} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import useStyles from './styles';
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Footer = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.footerContainer}>
            <div className={classes.logo}>
                <img src={Logo} style={{width: '460px', height: 'auto'}}/>
            </div>
            <div className={classes.links}>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary" component={Link} to="/">HOME</Typography>
                </div>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary" component={Link} to="/buy">BUY</Typography>
                </div>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary" component={Link} to="/sell">SELL</Typography>
                </div>
                <div className={classes.linkitems}>
                    <Typography className={classes.titles} color="primary" component={Link} to="/signup" >SIGN UP</Typography>
                </div>
            </div>
            <div className={classes.socialLinks}>
                <div className={classes.flex}>
                    <Typography className={classes.titles} color="primary">FOLLOW US</Typography>
                    <IconButton>
                        <a href="https://www.linkedin.com/in/gurashish-gill-6516b41b6" target="_blank">
                        <LinkedInIcon fontSize="large" color="primary"/>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.instagram.com/gurashish_gill_18/" target="_blank">
                        <InstagramIcon fontSize="large" color="primary"/>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://google.com" target="_blank">
                        <WhatsAppIcon fontSize="large" color="primary"/>
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
        <div className={classes.lastfooter}>
            <Typography>Made with </Typography>
            <FavoriteIcon fontSize="small"/>
        </div>
        </>
    )
}

export default Footer
