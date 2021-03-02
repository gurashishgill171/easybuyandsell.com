import React,{useState} from 'react';
import {Paper, Typography, Grid, TextField, FormControl, Select, MenuItem, InputLabel, Button} from '@material-ui/core';
import useStyles from './styles';
;


const Signup = () => {
    const classes = useStyles();

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [age, setage] = useState("");
    const [clg, setclg] = useState("");
    const [email, setemail] = useState("");
    const [pnum, setpnum] = useState("");
    const [pass1, setpass1] = useState("");
    const [pass2, setpass2] = useState("");

    // Error States
    const[fnameError, setfnameError] = useState("");
    const[lnameError, setlnameError] = useState("");
    const[pass1Error, setpass1Error] = useState("");
    const[pass2Error, setpass2Error] = useState("");
    const[passequalError, setpassequalerror] = useState("");

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const valid = () => {
        if(fname.length < 3 || fname==null){
            setfnameError("Invalid first name");
        }
        if(lname.length < 3 || lname==null){
            setlnameError("Invalid last name");
        }
        if(pass1.length < 6){
            setpass1Error("Length should be >= 6");
        }
        if(pass2.length < 6){
            setpass2Error("Length should be >= 6");
        }
        if(pass1 != pass2){
            setpassequalerror("Passwords doesn't match");
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setfnameError("");
        setlnameError("");
        setpass1Error("");
        setpass2Error("");
        setpassequalerror("");
        if(valid()){

        }
    };

    return (
        <div className={classes.container}>
            <Paper elevation={3} className={classes.paper}>
            <form onSubmit={handleSubmitForm}>
                <div className={classes.formTitle}>
                    <Typography className={classes.title}>CREATE ACCOUNT</Typography>
                </div>
                <div className={classes.fields}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                            required
                            id="standard-required" 
                            label="First Name" 
                            fullWidth
                            value={fname}
                            onChange={(event)=>{setfname(event.target.value)}}    
                            />
                            <p className={classes.error}>{fnameError}</p>
                        </Grid>
                        
                
                        <Grid item xs={6}>
                            <TextField 
                            required
                            id="standard-required" 
                            label="Last Name" 
                            fullWidth
                            value={lname}
                            onChange={(event=>{setlname(event.target.value)})}
                            />
                            <p className={classes.error}>{lnameError}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            required
                            id="standard-required" 
                            label="Age" 
                            type="number" 
                            fullWidth
                            value={age}
                            onChange={(event=>{setage(event.target.value)})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-controlled-open-select-label">College</InputLabel>
                                <Select
                                    required
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={clg}
                                    onChange={(event=>{setclg(event.target.value)})}
                                    >
                                    <MenuItem value={"Thapar University"}>Thapar University</MenuItem>
                                    <MenuItem value={"Punjab Engineering College"}>Punjab Engineering College</MenuItem>
                                    <MenuItem value={"IIT Delhi"}>IIT Delhi</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            required 
                            id="standard-required" 
                            label="Email" 
                            type="email" 
                            fullWidth
                            value={email}
                            onChange={(event=>{setemail(event.target.value)})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            required
                            id="standard-required" 
                            label="Phone Number" 
                            type="text" 
                            fullWidth
                            value={pnum}
                            onChange={(event=>{setpnum(event.target.value)})}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required 
                            id="standard-required" 
                            label="Password" 
                            type="password" 
                            fullWidth
                            value={pass1}
                            onChange={(event=>{setpass1(event.target.value)})}
                            />
                            <p className={classes.error}>{pass1Error}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required 
                            id="standard-required" 
                            label="Confirm Password" 
                            type="password" 
                            fullWidth 
                            value={pass2}
                            onChange={(event=>{setpass2(event.target.value)})}                                
                            />
                            <p className={classes.error}>{pass2Error} {passequalError}</p>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.btn}>
                    <Button variant="contained" type="submit">Sign Up</Button>
                </div>
                <div className={classes.foot}>
                    <Typography>Already have an account</Typography>
                    <a href="#">Log in</a>
                </div>
                </form>
            </Paper>
        </div>
    )
}

export default Signup
