import React, { useContext, useState } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../Firebase/firebase'
import { AuthContext } from '../Firebase/currentUser';
import logo from '../../assets/logo.png';

const Login = () => {
     const [email, setemail] = useState()
     const [password, setpassword] = useState()
     const {currentUser}=useContext(AuthContext)
     const history=useHistory()
     const login=()=>{
              auth.signInWithEmailAndPassword(email,password)
                  .then(()=>{
                      history.push({pathname:'/buy'})
                  })
                  .catch((e)=>{
                    alert(e);
                  })
     }



    return (
        // <div className={classes.container}>
        //     <Paper elevation={3} className={classes.paper}>
        //         <Typography className={classes.title}>LOG IN</Typography>
        //             <div className={classes.textfields}>
        //             <TextField
        //                 required
        //                 id="standard-required"
        //                 label="Username"
        //                 fullWidth
        //                 value={email}
        //                 onChange={(e)=>{setemail(e.target.value)}}
        //             />
        //             </div>
        //             <div className={classes.textfields}>
        //             <TextField
        //                 required
        //                 id="standard-required"
        //                 label="Password"
        //                 fullWidth
        //                 value={password}
        //                 type="password"
        //                 onChange={(e)=>{setpassword(e.target.value)}}
        //             />
        //             </div>
        //         <div className={classes.btnwrapper}>
        //             <Button variant="contained" onClick={()=>{login()}} color="secondary">Log In</Button>
        //         </div>
        //         <div className={classes.btnwrapper}>
        //             <Typography>Don't have an account?</Typography>
        //             <Button variant="contained" className={classes.btn} component={Link} to="/signup" color="secondary">Sign In</Button>
        //         </div>
        //     </Paper>
        // </div>
        <div className="login">
            <div className="login_container">
                <img src={logo} alt="img" className="login_logo"/>

                <form>
                    <div className="form_container">
                        <div className="form_elements">
                            <h4>Email</h4>
                            <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        </div>
                        <div className="form_elements">
                            <h4>Password</h4>
                            <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        </div>

                        <div className="form_login_btn">
                            <Button variant="contained" className="btn" onClick={()=>{login()}}>Log In</Button>
                        </div>
                    </div>
                </form>

                <p>Don't have an account?</p>

                <div className="form_login_btn">
                    <Button variant="contained" className="btn" component={Link} to="/signup">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
