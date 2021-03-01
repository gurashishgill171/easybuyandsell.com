import React from 'react';
import useStyles from './styles';
import {Typography, Paper, TextField, Grid, Button} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Footer from '../Footer/Footer';

const Sell = () => {
    const classes = useStyles();
    
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
                                        <TextField id="outlined-basic" label="Name(required)" variant="outlined" className={classes.textfield}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField id="outlined-basic" label="Product Title" variant="outlined" className={classes.textfield}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField id="outlined-basic" label="Quantity" variant="outlined" type="number" className={classes.textfield}/>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <TextField id="outlined-multiline-static" label="Description" multiline rows={4} variant="outlined"  className={classes.textfield}/>
                                    </Grid>
                                </Grid>
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.fieldtitle}>Price</Typography>
                        <TextField id="outlined-basic" label="Price(required)" variant="outlined" className={classes.textfield} />
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.fieldtitle}>Images</Typography>
                        <Button variant="contained" startIcon={<ImageIcon />} className={classes.btn}>
                            Choose Image
                        </Button>
                    </Paper>
                    <div className={classes.btngroup}>
                        <Button variant="contained" startIcon={<SaveIcon />} className={classes.btn}>Save Product</Button>
                        <Button variant="contained" startIcon={<DeleteIcon />} className={classes.btn}>Delete</Button>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Sell
