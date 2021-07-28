import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme)=>({
    toolbar: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
    },
    layout_container: {
      backgroundColor: '#eeeeee',
    },
    layout: {
        marginTop: '75px',
        marginBottom: theme.spacing(4),
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          width: 900,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
          width: 'auto',
          marginTop: 40,
        },
        [theme.breakpoints.up('md')]: {
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(2),
        },
      },
      title: {
          fontSize: '24px',
          fontWeight: '800',
          color: '#3f51b5',
          [theme.breakpoints.up('md')]:{
              fontSize: '28px',
              fontWeight: '800',
              color: '#3f51b5',
          }
      },
      fieldtitle: {
          fontSize: '13px',
          color: 'darkblue',
          borderBottom: '1px solid darkblue',
          marginBottom: theme.spacing(3),
      },
      textfield: {
        width: '100%',
      },
      btn: {
        maxWidth: '260px',
        display: 'flex',
        width: '100%',
        margin: 'auto',
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
          maxWidth: '180px',
          marginBottom: '25px',
        }
      },
      btngroup: {
        width:' 100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spacebetween',
        [theme.breakpoints.down('md')]:{
          flexDirection: 'column',
        }
      },
      items:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon: {
        fontSize: '40px',
        margin: '0px 15px',
      },
      error: {
        fontSize: '16px',
        fontStyle: 'italic',
        color: 'red',
        margin: 0,
    },
    notloggedin: {
      marginTop: '75px',
      height: '50vh',
    },
    loginNav:{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    typo:{
      marginBottom: theme.spacing(4),
    }
}));
