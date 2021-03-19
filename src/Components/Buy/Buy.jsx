import React from 'react';
import Products from './Products/Products';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../Footer/Footer';

const Buy = () => {
    const classes  = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.search}>
                <SearchIcon color="secondary" fontSize="xx-large"/>
                <input type="text" className={classes.searchbar} placeholder="Search product name, title" color="secondary"></input>
            </div>
            <Products />
        </div>
    )
}

export default Buy
