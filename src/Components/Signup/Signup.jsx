import React, { useState } from 'react';
import { Paper, Typography, Grid, TextField, FormControl, Select, MenuItem, InputLabel, Button } from '@material-ui/core';
import useStyles from './styles';
import { auth } from '../Firebase/firebase'
import axios from 'axios';
import {Link} from 'react-router-dom';


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
    let [fnameError, setfnameError] = useState("");
    let [lnameError, setlnameError] = useState("");
    let [pass1Error, setpass1Error] = useState("");
    let [pass2Error, setpass2Error] = useState("");
    let [passequalError, setpassequalerror] = useState("");


    const signUp = () => {

        try {
            auth
                .createUserWithEmailAndPassword(email, pass1)
                .then(() => {
                    axios.post('http://localhost:8080/SignUp', {
                        id: auth.currentUser.uid,
                        name: fname + " " + lname,
                        age: age,
                        college: clg,
                        email: email,
                        phone: pnum
                    }).then(() => {
                        auth.currentUser.updateProfile({displayName:fname + " " + lname})
                        alert("Account Created")
                    })
                        .catch((e) => {
                            auth.currentUser.delete()
                            alert(e)
                        })
                })
                .catch((e) => {

                    alert(e);
                })
        } catch (e) {
            alert(e)
        }
    }


    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    let valid = () => {
        let fnameError = ""; let lnameError = ""; let pass1Error = ""; let pass2Error = ""; let passequalError = "";

        if (fname.length < 3 || fname == null) {
            fnameError = "Invalid first name";
        }
        if (lname.length < 3 || lname == null) {
            lnameError = "Invalid last name";
        }
        if (pass1.length < 6) {
            pass1Error = "Length should be >= 6";
        }
        if (pass2.length < 6) {
            pass2Error = "Length should be >= 6";
        }
        if (pass1 != pass2) {
            passequalError = "Passwords doesn't match";
        }

        if (fnameError || lnameError || pass1Error || pass2Error || passequalError) {
            setfnameError(fnameError);
            setlnameError(lnameError);
            setpass1Error(pass1Error);
            setpass2Error(pass2Error);
            setpassequalerror(passequalError);
            return false;
        }
        return true;
    }

    const handleSubmitForm = (event) => {

        let isValid = valid();
        event.preventDefault();
        if (isValid) {
            setfnameError("");
            setlnameError("");
            setpass1Error("");
            setpass2Error("");
            setpassequalerror("");
            signUp();
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
                                    onChange={(event) => { setfname(event.target.value) }}
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
                                    onChange={(event => { setlname(event.target.value) })}
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
                                    onChange={(event => { setage(event.target.value) })}
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
                                        onChange={(event => { setclg(event.target.value) })}
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
                                    onChange={(event => { setemail(event.target.value) })}
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
                                    onChange={(event => { setpnum(event.target.value) })}
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
                                    onChange={(event => { setpass1(event.target.value) })}
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
                                    onChange={(event => { setpass2(event.target.value) })}
                                />
                                <p className={classes.error}>{pass2Error} {passequalError}</p>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.btn}>
                        <Button variant="contained" type="submit" >Sign Up</Button>
                    </div>
                    <div className={classes.foot}>
                        <Typography>Already have an account </Typography>
                        <Button component={Link} to="/login">Login</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default Signup
