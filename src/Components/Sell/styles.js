import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme)=>({
    toolbar: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
    },
    layout: {
        marginTop: theme.spacing(8),
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
          [theme.breakpoints.up('md')]:{
              fontSize: '28px'
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
      }
}));
