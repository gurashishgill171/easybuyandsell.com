import React, { useState } from 'react';
import './Signup.css';
import {Button } from '@material-ui/core';
// import useStyles from './styles';
import { auth } from '../Firebase/firebase'
import axios from 'axios';
import {Link} from 'react-router-dom';


const Signup = () => {
    // const classes = useStyles();

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
                        college: "Thapar University",
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
    //     <>
    //     <div className={classes.container}>
    //         <Paper elevation={3} className={classes.paper}>
    //             <form onSubmit={handleSubmitForm}>
    //                 <div className={classes.formTitle}>
    //                     <Typography className={classes.title}>CREATE ACCOUNT</Typography>
    //                 </div>
    //                 <div className={classes.fields}>
    //                     <Grid container spacing={3}>
    //                         <Grid item xs={6}>
    //                             <TextField
    //                                 required
    //                                 id="standard-required"
    //                                 label="First Name"
    //                                 fullWidth
    //                                 value={fname}
    //                                 onChange={(event) => { setfname(event.target.value) }}
    //                             />
    //                             <p className={classes.error}>{fnameError}</p>
    //                         </Grid>


    //                         <Grid item xs={6}>
    //                             <TextField
    //                                 required
    //                                 id="standard-required"
    //                                 label="Last Name"
    //                                 fullWidth
    //                                 value={lname}
    //                                 onChange={(event => { setlname(event.target.value) })}
    //                             />
    //                             <p className={classes.error}>{lnameError}</p>
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <TextField
    //                                 required
    //                                 id="standard-required"
    //                                 label="Age"
    //                                 type="number"
    //                                 fullWidth
    //                                 value={age}
    //                                 onChange={(event => { setage(event.target.value) })}
    //                             />
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <FormControl fullWidth>
    //                                 <InputLabel id="demo-controlled-open-select-label">College</InputLabel>
    //                                 <Select
    //                                     required
    //                                     labelId="demo-controlled-open-select-label"
    //                                     id="demo-controlled-open-select"
    //                                     open={open}
    //                                     onClose={handleClose}
    //                                     onOpen={handleOpen}
    //                                     value={clg}
    //                                     onChange={(event => { setclg(event.target.value) })}
    //                                 >
    //                                     <MenuItem value={"Thapar University"}>Thapar University</MenuItem>
    //                                     <MenuItem value={"Punjab Engineering College"}>Punjab Engineering College</MenuItem>
    //                                     <MenuItem value={"IIT Delhi"}>IIT Delhi</MenuItem>
    //                                 </Select>
    //                             </FormControl>
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <TextField
    //                                 required
    //                                 id="standard-required"
    //                                 label="Email"
    //                                 type="email"
    //                                 fullWidth
    //                                 value={email}
    //                                 onChange={(event => { setemail(event.target.value) })}
    //                             />
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <TextField
    //                                 required
    //                                 id="standard-required"
    //                                 label="Phone Number"
    //                                 type="text"
    //                                 fullWidth
    //                                 value={pnum}
    //                                 onChange={(event => { setpnum(event.target.value) })}
    //                             />
    //                         </Grid>
    //                         <Grid item xs={12}>
    //                             <TextField
    //                                 required
    //                                 id="standard-required"
    //                                 label="Password"
    //                                 type="password"
    //                                 fullWidth
    //                                 value={pass1}
    //                                 onChange={(event => { setpass1(event.target.value) })}
    //                             />
    //                             <p className={classes.error}>{pass1Error}</p>
    //                         </Grid>
    //                         <Grid item xs={12}>
    //                             <TextField
    //                                 required
    //                                 id="standard-required"
    //                                 label="Confirm Password"
    //                                 type="password"
    //                                 fullWidth
    //                                 value={pass2}
    //                                 onChange={(event => { setpass2(event.target.value) })}
    //                             />
    //                             <p className={classes.error}>{pass2Error} {passequalError}</p>
    //                         </Grid>
    //                     </Grid>
    //                 </div>
    //                 <div className={classes.btn}>
    //                     <Button variant="contained" type="submit" color="secondary">Sign Up</Button>
    //                 </div>
    //                 <div className={classes.foot}>
    //                     <Typography>Already have an account?</Typography>
    //                     <Button variant="contained" color="secondary" className={classes.btn2} component={Link} to="/login">Login</Button>
    //                 </div>
    //             </form>
    //         </Paper>
    //     </div>
    // </>
        <div className="signup">
            <div className="signup_container">
                <h1>Create your Account</h1>
                <form>
                    <div className="form_container">
                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>First Name</h4>
                                <input type="text" required value={fname} onChange={(event) => { setfname(event.target.value) }}/>
                                <p className="error">{fnameError}</p>
                            </div>
                            <div className="form_elements">
                                <h4>Last Name</h4>
                                <input type="text" required value={lname} onChange={(event => { setlname(event.target.value) })}/>
                                <p className="error">{lnameError}</p>
                            </div>
                        </div>

                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>Age</h4>
                                <input type="number" required value={age} onChange={(event => { setage(event.target.value) })}/>
                            </div>
                            <div className="form_elements">
                                <h4>Choose your College</h4>
                                <select id="college" name="college" required value={clg} onChange={(event => {setclg(event.target.value) })}>
                                    <option value="TIET">Thapar University</option>
                                    <option value="PEC">Punjab Engineering College</option>
                                    <option value="CU">Chandigarh University</option>
                                    <option value="NITJ">NIT Jalandhar</option>
                                </select>
                            </div>
                        </div>

                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>Email</h4>
                                <input type="email" value={email} required onChange={(event => { setemail(event.target.value) })}/>
                            </div>
                            <div className="form_elements">
                                <h4>Mobile Number</h4>
                                <input type="number" value={pnum} required onChange={(event => { setpnum(event.target.value) })}/>
                            </div>
                        </div>

                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>Password</h4>
                                <input type="password" value={pass1} required onChange={(event => { setpass1(event.target.value) })}/>
                                <p className="error">{pass1Error}</p>
                            </div>
                            <div className="form_elements">
                                <h4>Confirm Password</h4>
                                <input type="password" value={pass2} required onChange={(event => { setpass2(event.target.value) })}/>
                                <p className="error">{pass2Error} {passequalError}</p>
                            </div>
                        </div>
                        </div>
                </form>

                <div className="form_btn">
                    <Button variant="contained" className="btn" onClick={handleSubmitForm}>Sign Up</Button>
                </div>

                <p>Already have an account?</p>
                <div className="form_btn">
                    <Button variant="contained" className="btn" component={Link} to="/login">Log In</Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
