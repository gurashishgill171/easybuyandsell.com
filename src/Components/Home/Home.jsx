import React from 'react';
import './style.css'
import homeImg from '../../assets/homePage.jpg'
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MediaCard from './MediaCard'

const Home = () => {
    return <div className="homepage">

        <div className="top">

            <h1>Experience easy and simple Buying and Selling</h1>
            <Link to="/buy" className="link">Buy Products</Link>


            <img src={homeImg} />


        </div>

        <div className="aboutUS">
            <h1>About Us<br/>
            Website is Made by</h1>
            <div className="cards">
                <MediaCard className="inner-cards" name="Parmeet Singh" image=""  link=""  />
                <MediaCard className="inner-cards" name="Gurashish Gill" image="" link=""/>
            </div>
        </div>



    </div>;
}


export default Home;