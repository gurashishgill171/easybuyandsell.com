import React,{useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton, Badge} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Logo from '../../assets/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './styles';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const classes = useStyles();

    const[menu, setMenu] = useState(null);

    const isMenuOpen = Boolean(menu);

    const handleMenuClose = () =>{
        setMenu(null);
    }

    const handleMenuopen = (event) =>{
        setMenu(event.currentTarget);
    }

    const MenuId = 'menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={menu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={MenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
      <MenuItem>
          <IconButton aria-label="home" color="inherit" component={Link} to="/">
              <HomeIcon />
              <p className={classes.text}>Home</p>
          </IconButton>
          
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="buy" color="inherit" component={Link} to="/buy">
              <ShoppingBasketIcon />
              <p className={classes.text}>Buy</p>
          </IconButton>
          
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="sell" color="inherit" component={Link} to="/sell">
              <AttachMoneyIcon />
              <p className={classes.text}>Sell</p>
          </IconButton>
          
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="account" color="inherit" component={Link} to="/signup">
              <AccountCircleIcon />
              <p className={classes.text}>Account</p>
          </IconButton>
          
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="Cart" color="inherit">
            <Badge badgeContent={5} color="secondary" className={classes.badge}>
              <ShoppingCartIcon />
            </Badge>
            <p className={classes.text}>Cart</p>
          </IconButton>
          
        </MenuItem>
      </Menu>
    );

    return (
        <div>
            <AppBar position="fixed" color="inherit" className={classes.appbar}>
                <Toolbar>
                <img src={Logo} alt="Logo" className={classes.image}/>
                <div className={classes.grow}/>
                    <div className={classes.mobileversion}>
                        <IconButton aria-label="Menu" aria-controls={MenuId} aria-haspopup="true" onClick={handleMenuopen} color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={classes.desktopversion}>
                      <IconButton aria-label="Home" color="inherit" component={Link} to="/">
                            <HomeIcon className={classes.iconbtn}/>
                            <p className={classes.text}>Home</p>
                        </IconButton>
                        <IconButton aria-label="Buy" color="inherit" component={Link} to="/buy">
                            <ShoppingBasketIcon className={classes.iconbtn}/>
                            <p className={classes.text}>Buy</p>
                        </IconButton>
                        <IconButton aria-label="Sell" color="inherit" component={Link} to="/sell">
                            <AttachMoneyIcon className={classes.iconbtn}/>
                            <p className={classes.text}>Sell</p>
                        </IconButton>
                        <IconButton aria-label="account" color="inherit" component={Link} to="/signup" >
                            <AccountCircleIcon className={classes.iconbtn}/>
                            <p className={classes.text}>Account</p>
                        </IconButton>
                        <IconButton aria-label="Cart" color="inherit" >
                            <Badge badgeContent={5} color="secondary" className={classes.badge}>
                                <ShoppingCartIcon className={classes.iconbtn}/>
                            </Badge>
                            <p className={classes.text}>Cart</p>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    )
}

export default Navbar
