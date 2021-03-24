import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { CardHeader, IconButton, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    maxWidth: '410px',
    height: 'auto',
    margin:'20px',
  },
  btn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={6}>
      <CardHeader 
        title={props.name}
      />
     <CardMedia
        style={{
          width: "100%",
          maxHeight: "256px",
          height: 'auto',
          objectFit: 'contain',
        }}
          component="img"
          image={props.image}
    />
      <CardContent gutterBottom variant="h5" component="h2">
        <Typography>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn}>
          <LinkedInIcon color="secondary"/>
        </Button>
      </CardActions>
    </Card>
  );
}
