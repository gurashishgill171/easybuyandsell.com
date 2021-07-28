import React from 'react';
import './Home.css';
import useStyles from './Styles';
import {Typography, Button} from '@material-ui/core';
import homebg from '../../assets/homebg.png';
import aboutus from '../../assets/aboutus.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
import MediaCard from './MediaCard';
import Testinomials from '../Testinomials/Testinomials';

const Home = () => {
    const classes = useStyles();
    return( 
    // <>
    //     <div className={classes.toolbar}/>
    //     <div className={classes.homesec1}>
    //         <div className={classes.sec1}>
    //             <div className={classes.leftsec1}>
    //                 <Typography className={classes.title}>With us Buying and Selling 
    //                 in College is very easy!!!</Typography>
    //                 <Typography className={classes.description}>Join people using EASYBUYANDSELL.COM to painlessly buying and selling products at your college.Buy clicking Buy Now you can see various products available to buy. Buy clicking Sell Now you can easily sell your products by adding some information.</Typography>
    //                 <div className={classes.btns}>
    //                     <Button variant="contained" className={classes.btn} color="secondary" component={Link} to="/buy">Buy Now <ArrowRightAltIcon/></Button>
    //                     <Button variant="contained" className={classes.btn} color="secondary" component={Link} to="/sell">Sell Now <ArrowRightAltIcon/></Button>
    //                 </div>      
    //             </div>
    //             <div className={classes.rightsec1}>
    //                 <img src={homebg} className={classes.homebgimg}/>
    //             </div>
    //         </div>
    //     </div>
    //     <div className={classes.homesec2}>
    //         <div className={classes.aboutsec}>
    //             <Typography className={classes.title}>About us</Typography>
    //             <img src={aboutus} className={classes.aboutimg}/>
    //         </div>
    //         <div className={classes.cards}>
    //             <MediaCard name="Gurashish Gill" description="Gurashish Gill is from Ambala City and is currently a second year student at Thapar Institute Of Engineering and Technology" image={gurashish} link="/www.linkedin.com/in/gurashish-gill-6516b41b6"/>
    //             <MediaCard name="Parmeet Singh" description="Parmeet Singh is from Ludhiana and is currently a second year student at Thapar Institute Of Engineering and Technology" image={parmeet} link="/www.linkedin.com/in/gurashish-gill-6516b41b6"/>
    //         </div> 
    //     </div>
    // </>

    <div className="home">
        <div className="home_container">
            <div className="home_section">
                <div className="home_section_element">
                    <h1>With us Buying and Selling in College is very easy!!!</h1>
                    <p>Join people using EASYBUYANDSELL.COM to painlessly buying and selling products at your college.Buy clicking Buy Now you can see various products available to buy. Buy clicking Sell Now you can easily sell your products by adding some information.</p>

                    <div className="home_section_btn">
                        <Button variant="outlined" className="home_btn" component={Link} to="/buy">Buy Now <ArrowRightAltIcon/></Button>
                        <Button variant="outlined" className="home_btn" component={Link} to="/sell">Sell Now <ArrowRightAltIcon/></Button>
                    </div>
                </div>
                <div className="home_section_element">
                    <img src={homebg} alt="img" className="home_img"/>
                </div>
            </div>
            <hr />
            <div className="home_section2">
                <div className="home_section2_element">
                    <h1>About Us</h1>
                    <img src={aboutus} alt="img" className="about_img"/>
                </div>

                <Testinomials />
            </div>
        </div>
    </div>
    );
}


export default Home;