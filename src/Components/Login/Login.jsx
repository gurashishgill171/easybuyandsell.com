import React from 'react';
import {Paper, Typography, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.title}>Log In</Typography>
                    <div className={classes.textfields}>
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        fullWidth
                    />
                    </div>
                    <div className={classes.textfields}>
                    <TextField
                        required
                        id="standard-required"
                        label="Password"
                        fullWidth
                    />
                    </div>
                <div className={classes.btnwrapper}>
                    <Button variant="contained">Log In</Button>
                </div>
                <div className={classes.btnwrapper}>
                    <Typography>Don't have an account?</Typography>
                    <Button variant="contained" className={classes.btn} component={Link} to="/signup">Sign In</Button>
                </div>
            </Paper>
        </div>
    )
}

export default Login;
