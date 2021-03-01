import React,{useState} from 'react';
import {Paper, Typography, Grid, TextField, FormControl, Select, MenuItem, InputLabel, Button} from '@material-ui/core';
import useStyles from './styles';
;


const Signup = () => {
    const classes = useStyles();

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [age, setage] = useState('');
    const [clg, setclg] = useState('');
    const [email, setemail] = useState('');
    const [pnum, setpnum] = useState('');
    const [pass1, setpass1] = useState('');
    const [pass2, setpass2] = useState('');


    const handlefnameChange = (event) => {
        setfname(event.target.value);
    };   
    const handlelnameChange = (event) => {
        setlname(event.target.value);
    };
    const handleageChange = (event) => {
        setage(event.target.value);
    };
    const handleemailChange = (event) => {
        setemail(event.target.value);
    };
    const handlepnumChange = (event) => {
        setpnum(event.target.value);
    };
    const handlepass1Change = (event) => {
        setpass1(event.target.value);
    };
    const handlepass2Change = (event) => {
        setpass2(event.target.value);
    };
    const handleClgChange = (event) => {
        setclg(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmitForm = (event) => {
        
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
                            onChange={handlefnameChange}    
                            />
                        </Grid>
                        
                        <Grid item xs={6}>
                            <TextField 
                            required
                            id="standard-required" 
                            label="Last Name" 
                            fullWidth
                            value={lname}
                            onChange={handlelnameChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                            required
                            id="standard-required" 
                            label="Age" 
                            type="number" 
                            fullWidth
                            value={age}
                            onChange={handleageChange}
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
                                    onChange={handleClgChange}
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
                            onChange={handleemailChange}
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
                            onChange={handlepnumChange}
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
                            onChange={handlepass1Change}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required 
                            id="standard-required" 
                            label="Confirm Password" 
                            type="password" 
                            fullWidth 
                            value={pass2}
                            onChange={handlepass2Change}/>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.btn}>
                    <Button variant="contained" type="submit">Sign Up</Button>
                </div>
                </form>
            </Paper>
        </div>
    )
}

export default Signup
