import React,{useState,useContext} from 'react';
import Products from './Products/Products';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../Footer/Footer';
import { Button, Typography } from '@material-ui/core';
import axios from 'axios'
import { AuthContext } from '../Firebase/currentUser';
import { useHistory, useParams } from 'react-router';
import {Link} from 'react-router-dom';


const Buy = () => {
    const {search}=useParams();
    const classes  = useStyles();
    const history=useHistory();
    const [query, setquery] = useState()
    const {setsearchProducts}=useContext(AuthContext)
     
    const {currentUser} = useContext(AuthContext)

    let isloggedin;
    if(currentUser){
        isloggedin = true;
    }else{
        isloggedin = false;
    }

    const Search=()=>{
             
              axios.get('http://localhost:8080/search',{
                  params:{query:query}
              }).then((res)=>{
                  let items=[]
                  let x
                  for (x in res.data.hits.hits) {
                    items.push({
                        "title": res.data.hits.hits[x].name,
                        "description": res.data.hits.hits[x].description,
                        "image": res.data.hits.hits[x].imageUrl,
                        "price": res.data.hits.hits[x].price,
                        "seller": res.data.hits.hits[x].seller,
                        "phone": res.data.hits.hits[x].phone,
                        "email": res.data.hits.hits[x].email
                    })
                }
                  setsearchProducts([...items]);
                  history.push({pathname:'/buy/search'})
              }).catch((err)=>{
                  console.log("Error: "+err)
              })

     }

    return (
        <>
            {
                isloggedin ?
                <>
                <div className={classes.content}>
                <div className={classes.search}>
                    <SearchIcon color="secondary" fontSize="xx-large"/>
                    <input type="text" value={query} onChange={(e)=>{setquery(e.target.value)}} className={classes.searchbar} placeholder="Search product name, title" color="secondary"></input>
                    <Button onClick={Search}>Search</Button>
                </div>
                    <Products isSearch={search==='search'?true:false} />
                </div>
                </>
            :
            <>
                <div className={classes.notloggedin}>
                    <div className={classes.loginNav}>
                        <Typography className={classes.typo}>You are not loged in</Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/login">LOG IN</Button>
                    </div>
                </div>
            </>  
            }
        </>
    )
}

export default Buy
