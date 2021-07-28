import React,{useState,useContext} from 'react';
import './Sell.css';
import useStyles from './styles';
import {Typography, Paper, TextField, Grid, Button, InputLabel, Select, MenuItem, Modal} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DevicesIcon from '@material-ui/icons/Devices';
import WeekendIcon from '@material-ui/icons/Weekend';
import FaceIcon from '@material-ui/icons/Face';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import {AuthContext} from '../Firebase/currentUser';
import {auth} from '../Firebase/firebase';
import {Link, useHistory} from 'react-router-dom';




const Sell = () => {
    
    const classes = useStyles();
    const history = useHistory();
    const {currentUser} = useContext(AuthContext)
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    let isloggedin;
    if(currentUser){
        isloggedin = true;
    }else{
        isloggedin = false;
    }
    // Field States
    const[name, setname] = useState("");
    const[category, setcategory] = useState("");
    const[quantity, setquantity] = useState("");
    const[description, setdescription] = useState("");
    const[price, setprice] = useState("");
    const [files, setfiles] = useState([])
    //Error States
    let[nameE, setnameE] = useState("");
    let[quantE, setquantE] = useState("");
    let[descE, setdescE] = useState("");
    let[priceE, setpriceE] = useState("");
    let[fileE, setfileE] = useState("");

    let valid = () =>{
        let nameE = ""; let quantE = ""; let descE = ""; let priceE = ""; let fileE  = "";
        
        if(name.length < 3){
            nameE = "Invalid name";
        }
        if(quantity <= 0){
            quantE = "Invalid quantity";
        }
        if(description.length < 10){
            descE = "Minimum 10 characters required";
        }
        if(price < 0){
            priceE = "Price cannot be < 0";
        }
        if(files.length < 1 || files.length >5){
            fileE = "Minimum 1 and Maximum 5 images can be uploaded";
        }

        if(nameE || quantE || descE || priceE || fileE){
            setnameE(nameE);
            setquantE(quantE);
            setdescE(descE);
            setpriceE(priceE);
            setfileE(fileE);
            return false;
        }
        return true;
    }

    const sell=()=>{
        const data=new FormData()
        data.append("name",name)
        data.append("category",category)
        data.append("quantity",quantity)
        data.append("description",description)
        data.append("college","Thapar University")
        for (let i = 0; i < files.length; i++) {
            data.append("productImage",files[i], files[i].name)
        }
        data.append("id",currentUser.uid)
        data.append("price",price)

        axios.post("http://localhost:8080/sell"
                   ,data
                   ,{headers: { "Content-Type": "multipart/form-data" }}
                   ).then((res)=>{
                       
                    alert(res.data)
                   }).catch((e)=>{alert(e)})

    }



    const handleSaveProduct = (event) => {
        let isValid = valid();
        event.preventDefault();
        if(isValid){
            setnameE("");
            setquantE("");
            setdescE("");
            setpriceE("");
            setfileE("");
            sell()
        }
    }
    
    return (
        // <>
        //     {/* <div className={classes.toolbar}/> */}
        //     <div className={classes.grow}>
        //     {
        //        isloggedin ? 
        //         <div className={classes.layout_container}>
        //         <main className={classes.layout}>
        //             <h1 className={classes.title}>Sell your product by adding details...</h1>
        //             <Paper elevation={3} className={classes.paper}>
        //                 <Typography className={classes.fieldtitle}>Product Details</Typography>
        //                         <Grid container spacing={3} >
        //                             <Grid item xs={12}>
        //                                 <TextField
        //                                 required 
        //                                 id="outlined-basic" 
        //                                 label="Product Name" 
        //                                 variant="outlined"
        //                                 value={name}
        //                                 onChange={(event)=>setname(event.target.value)} 
        //                                 className={classes.textfield}/>
        //                                 <p className={classes.error}>{nameE}</p>
        //                             </Grid>
        //                             <Grid item xs={6}>
        //                                 <InputLabel id="demo-controlled-open-select-label" fullWidth>Product Category</InputLabel>
        //                                 <Select
        //                                 fullWidth
        //                                 required
        //                                 labelId="demo-controlled-open-select-label"
        //                                 id="demo-controlled-open-select"
        //                                 open={open}
        //                                 onClose={handleClose}
        //                                 onOpen={handleOpen}
        //                                 value={category}
        //                                 onChange={(event => { setcategory(event.target.value) })}
        //                                 >
        //                                     <MenuItem value={"Mobiles"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <PhoneAndroidIcon/>
        //                                             <p style={{paddingLeft: '10px'}}>Mobiles</p>
        //                                         </div>
        //                                     </MenuItem>
        //                                     <MenuItem value={"Bikes"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <MotorcycleIcon />
        //                                             <p style={{paddingLeft: '10px'}}>Bikes</p>
        //                                         </div>
        //                                     </MenuItem>
        //                                     <MenuItem value={"Electronics and Devices"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <DevicesIcon />
        //                                             <p style={{paddingLeft: '10px'}}>Electronics and Devices</p>
        //                                         </div>
        //                                     </MenuItem>
        //                                     <MenuItem value={"Furnitures"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <WeekendIcon />
        //                                             <p style={{paddingLeft: '10px'}}>Furnitures</p>
        //                                         </div>
        //                                     </MenuItem>
        //                                     <MenuItem value={"Fashion"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <FaceIcon />
        //                                             <p style={{paddingLeft: '10px'}}>Fashion</p>
        //                                         </div>
        //                                     </MenuItem>
        //                                     <MenuItem value={"Books"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <ImportContactsIcon />
        //                                             <p style={{paddingLeft: '10px'}}>Books</p>
        //                                         </div>
        //                                     </MenuItem>
        //                                     <MenuItem value={"Sports"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <SportsCricketIcon />
        //                                             <p style={{paddingLeft: '10px'}}>Sports</p>
        //                                         </div>
        //                                     </MenuItem>
        //                                     <MenuItem value={"Others"} className={classes.items}>
        //                                         <div className={classes.items}>
        //                                             <AddIcon />
        //                                             <p style={{paddingLeft: '10px'}}>Others</p>
        //                                         </div>
        //                                     </MenuItem>

        //                                 </Select>
        //                             </Grid>
        //                             <Grid item xs={6}>
        //                                 <TextField
        //                                 required 
        //                                 id="outlined-basic" 
        //                                 label="Quantity" 
        //                                 variant="outlined" 
        //                                 type="number"
        //                                 value={quantity}
        //                                 onChange={(event)=>setquantity(event.target.value)} 
        //                                 className={classes.textfield}/>
        //                                 <p className={classes.error}>{quantE}</p>
        //                             </Grid>
        //                             <Grid item xs={12} >
        //                             <TextField 
        //                             id="outlined-multiline-static" 
        //                             label="Product Description" 
        //                             multiline rows={4} 
        //                             variant="outlined"
        //                             value={description}
        //                             onChange={(event)=>setdescription(event.target.value)} 
        //                             className={classes.textfield}/>
        //                             <p className={classes.error}>{descE}</p>
        //                             </Grid>
        //                         </Grid>
        //             </Paper>
        //             <Paper elevation={3} className={classes.paper}>
        //                 <Typography className={classes.fieldtitle}>Price</Typography>
        //                 <TextField
        //                 required 
        //                 id="outlined-basic" 
        //                 label="Expected Price" 
        //                 variant="outlined"
        //                 value={price}
        //                 onChange={(event)=>setprice(event.target.value)} 
        //                 className={classes.textfield} />
        //                 <p className={classes.error}>{priceE}</p>
        //             </Paper>
        //             <Paper elevation={3} className={classes.paper}>
        //                 <Typography className={classes.fieldtitle}>Images</Typography>
        //                 <input type="file" accept=".jpg, .jpeg, .png" multiple onChange={(event)=>{setfiles(event.target.files)}}/>
        //                 <p className={classes.error}>{fileE}</p>
        //             </Paper>
        //             <div className={classes.btngroup}>
        //                 <Button variant="contained" color="secondary" startIcon={<SaveIcon />} className={classes.btn} onClick=      {handleSaveProduct}>Save Product</Button>
        //             </div>
        //         </main>
        //         </div> : 
        //             <>
        //                 <div className={classes.notloggedin}>
        //                     <div className={classes.loginNav}>
        //                         <Typography className={classes.typo}>You are not loged in</Typography>
        //                         <Button variant="contained" color="secondary" component={Link} to="/login">LOG IN</Button>
        //                     </div>
        //                 </div>
        //             </>  
        //         }
        //     </div>
        // </>
        <div className="sell">
            <div className="sell_container">
                <h1 className="sell_title">Sell your products by adding details...</h1>
                <form className="form">
                    <div className="form_container">
                        <div className="form_element">
                            <h4>Product Name</h4>
                            <input type="text" value={name} onChange={(event)=>setname(event.target.value)} />
                            <p className="error">{nameE}</p>
                        </div>
                    </div>
                    <div className="form_container">
                        <div className="form_element">
                            <h4>Product Category</h4>
                            <Select
                                fullWidth
                                required
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={category}
                                onChange={(event => { setcategory(event.target.value) })}
                            >

                                <MenuItem value={"Mobiles"} className="items">
                                    <div className="items">
                                        <PhoneAndroidIcon />
                                        <p style={{paddingLeft: '10px'}}>Mobiles</p>
                                     </div>
                                </MenuItem>
                                <MenuItem value={"Books"} className="items">
                                    <div className="items">
                                        <ImportContactsIcon />
                                        <p style={{paddingLeft: '10px'}}>Books</p>
                                     </div>
                                </MenuItem>
                                <MenuItem value={"Bikes"} className="items">
                                    <div className="items">
                                        <MotorcycleIcon />
                                        <p style={{paddingLeft: '10px'}}>Bikes</p>
                                    </div>
                                </MenuItem>
                                <MenuItem value={"Electronics"} className="items">
                                    <div className="items">
                                        <DevicesIcon />
                                        <p style={{paddingLeft: '10px'}}>Electronics</p>
                                    </div>
                                </MenuItem>
                                <MenuItem value={"Furniture"} className="items">
                                    <div className="items">
                                        <WeekendIcon />
                                        <p style={{paddingLeft: '10px'}}>Furnitures</p>
                                    </div>
                                </MenuItem>
                                <MenuItem value={"Fashion"} className="items">
                                    <div className="items">
                                        <FaceIcon />
                                        <p style={{paddingLeft: '10px'}}>Fashion</p>
                                    </div>
                                </MenuItem>
                                <MenuItem value={"Others"} className="items">
                                    <div className="items">
                                        <AddIcon />
                                        <p style={{paddingLeft: '10px'}}>Others</p>
                                    </div>
                                </MenuItem>

                            </Select>
                        </div>
                    </div>

                    <div className="form_container">
                        <div className="form_element">
                            <h4>Product Quantity</h4>
                            <input type="number" value={quantity} onChange={(event)=>setquantity(event.target.value)}/>
                            <p className="error">{quantE}</p>
                        </div>
                    </div>

                    <div className="form_container">
                        <div className="form_element">
                            <h4>Product Description</h4>
                            <textarea id="description" name="description" rows="8" cols="25" value={description} onChange={(event)=>setdescription(event.target.value)} />
                            <p className="error">{descE}</p>
                        </div>
                    </div>

                    <div className="form_container">
                        <div className="form_element">
                            <h4>Product Price(₹)</h4>
                            <input type="number" value={price} onChange={(event)=>setprice(event.target.value)} />
                            <p className="error">{priceE}</p>
                        </div>
                    </div>

                    <div className="form_container">
                        <div className="form_element">
                            <h4>Product Images</h4>
                            <input type="file" accept=".jpg, .jpeg, .png" multiple onChange={(event)=>{setfiles(event.target.files)}}/>
                            <p className="error">{fileE}</p>
                        </div>
                    </div>
                </form>

                <div className="btn_container">
                    <Button variant="contained" className="btn" startIcon={<SaveIcon />} onClick={handleSaveProduct}>Save Product</Button>
                </div>
            </div>
        </div>
    )
}

export default Sell
