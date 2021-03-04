import React,{useState} from 'react';
import useStyles from './styles';
import {Typography, Paper, TextField, Grid, Button, InputLabel, Select, MenuItem} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DevicesIcon from '@material-ui/icons/Devices';
import WeekendIcon from '@material-ui/icons/Weekend';
import FaceIcon from '@material-ui/icons/Face';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import AddIcon from '@material-ui/icons/Add';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Sell = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    // Field States
    const[name, setname] = useState("");
    const[category, setcategory] = useState("");
    const[quantity, setquantity] = useState("");
    const[description, setdescription] = useState("");
    const[price, setprice] = useState("");

    //Error States
    let[nameE, setnameE] = useState("");
    let[quantE, setquantE] = useState("");
    let[descE, setdescE] = useState("");
    let[priceE, setpriceE] = useState("");

    let valid = () =>{
        let nameE = ""; let quantE = ""; let descE = ""; let priceE = "";
        
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

        if(nameE || quantE || descE || priceE){
            setnameE(nameE);
            setquantE(quantE);
            setdescE(descE);
            setpriceE(priceE);
            return false;
        }
        return true;
    }
    const handleSaveProduct = (event) => {
        let isValid = valid();
        event.preventDefault();
        if(isValid){
            setnameE("");
            setquantE("");
            setdescE("");
            setpriceE("");
            alert("Your product has been saved!!!")
        }
    }
    
    return (
        <>
            <div className={classes.toolbar}/>
            <div className={classes.grow}>
                <main className={classes.layout}>
                    <Typography className={classes.title}>Sell your product by adding details...</Typography>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.fieldtitle}>Product Details</Typography>
                                <Grid container spacing={3} >
                                    <Grid item xs={12}>
                                        <TextField
                                        required 
                                        id="outlined-basic" 
                                        label="Product Name" 
                                        variant="outlined"
                                        value={name}
                                        onChange={(event)=>setname(event.target.value)} 
                                        className={classes.textfield}/>
                                        <p className={classes.error}>{nameE}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <InputLabel id="demo-controlled-open-select-label" fullWidth>Product Category</InputLabel>
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
                                            <MenuItem value={"Mobiles"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <PhoneAndroidIcon/>
                                                    <p style={{paddingLeft: '10px'}}>Mobiles</p>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={"Bikes"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <MotorcycleIcon />
                                                    <p style={{paddingLeft: '10px'}}>Bikes</p>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={"Electronics and Devices"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <DevicesIcon />
                                                    <p style={{paddingLeft: '10px'}}>Electronics and Devices</p>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={"Furnitures"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <WeekendIcon />
                                                    <p style={{paddingLeft: '10px'}}>Furnitures</p>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={"Fashion"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <FaceIcon />
                                                    <p style={{paddingLeft: '10px'}}>Fashion</p>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={"Books"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <ImportContactsIcon />
                                                    <p style={{paddingLeft: '10px'}}>Books</p>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={"Sports"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <SportsCricketIcon />
                                                    <p style={{paddingLeft: '10px'}}>Sports</p>
                                                </div>
                                            </MenuItem>
                                            <MenuItem value={"Others"} className={classes.items}>
                                                <div className={classes.items}>
                                                    <AddIcon />
                                                    <p style={{paddingLeft: '10px'}}>Others</p>
                                                </div>
                                            </MenuItem>

                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                        required 
                                        id="outlined-basic" 
                                        label="Quantity" 
                                        variant="outlined" 
                                        type="number"
                                        value={quantity}
                                        onChange={(event)=>setquantity(event.target.value)} 
                                        className={classes.textfield}/>
                                        <p className={classes.error}>{quantE}</p>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <TextField 
                                    id="outlined-multiline-static" 
                                    label="Product Description" 
                                    multiline rows={4} 
                                    variant="outlined"
                                    value={description}
                                    onChange={(event)=>setdescription(event.target.value)} 
                                    className={classes.textfield}/>
                                    <p className={classes.error}>{descE}</p>
                                    </Grid>
                                </Grid>
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.fieldtitle}>Price</Typography>
                        <TextField
                        required 
                        id="outlined-basic" 
                        label="Expected Price" 
                        variant="outlined"
                        value={price}
                        onChange={(event)=>setprice(event.target.value)} 
                        className={classes.textfield} />
                        <p className={classes.error}>{priceE}</p>
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.fieldtitle}>Images</Typography>
                        <AddAPhotoIcon className={classes.icon}/>
                        <AddAPhotoIcon className={classes.icon}/>
                        <AddAPhotoIcon className={classes.icon}/>
                        <AddAPhotoIcon className={classes.icon}/>
                    </Paper>
                    <div className={classes.btngroup}>
                        <Button variant="contained" startIcon={<SaveIcon />} className={classes.btn} onClick={handleSaveProduct}>Save Product</Button>
                        <Button variant="contained" startIcon={<DeleteIcon />} className={classes.btn}>Delete</Button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Sell
