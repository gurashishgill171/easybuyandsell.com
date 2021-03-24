import React, { useContext, useState } from 'react';
import {Paper, Typography, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import {auth} from '../Firebase/firebase'
import { AuthContext } from '../Firebase/currentUser';

const Login = () => {
    const classes = useStyles();
     const [email, setemail] = useState()
     const [password, setpassword] = useState()
     const {currentUser}=useContext(AuthContext)
     const login=()=>{
              auth.signInWithEmailAndPassword(email,password)
                  .then(()=>{
                     alert("Succesfully Login")

                  })
                  .catch((e)=>{
                    alert(e);
                  })
     }



    return (
        <div className={classes.container}>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.title}>LOG IN</Typography>
                    <div className={classes.textfields}>
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        fullWidth
                        value={email}
                        onChange={(e)=>{setemail(e.target.value)}}
                    />
                    </div>
                    <div className={classes.textfields}>
                    <TextField
                        required
                        id="standard-required"
                        label="Password"
                        fullWidth
                        value={password}
                        type="password"
                        onChange={(e)=>{setpassword(e.target.value)}}
                    />
                    </div>
                <div className={classes.btnwrapper}>
                    <Button variant="contained" onClick={()=>{login()}} color="secondary">Log In</Button>
                </div>
                <div className={classes.btnwrapper}>
                    <Typography>Don't have an account?</Typography>
                    <Button variant="contained" className={classes.btn} component={Link} to="/signup" color="secondary">Sign In</Button>
                </div>
            </Paper>
        </div>
    )
}

export default Login;
