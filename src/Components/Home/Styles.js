import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme)=>({
    toolbar: theme.mixins.toolbar,
    homesec1: {
        marginTop: '20px',
        width: '100%',
        height: '90vh',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            minHeight: '100vh',
        }
    },
    sec1: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    leftsec1:{
        margin: theme.spacing(4),
        maxWidth: '560px'
    },
    rightsec1:{
        margin: theme.spacing(4),
    },
    homebgimg:{
        width: '471px',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(8),
            width: '296px',
        }
    },
    btns:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    btn:{
        fontSize: '21px',
        padding: theme.spacing(2),
        margin: theme.spacing(4),
    },
    title:{
        fontSize: '36px',
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
        }
    },
    description: {
        fontSize: '18px',
        fontWeight: 'light',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        }
    },
    homesec2:{
        width: '100%',
        height: 'auto',
        marginBottom: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            minHeight: '100vh',
        }
    },
    aboutimg:{
        width: '359px',
        height: 'auto',
    },
    aboutsec: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    cards:{
        margin: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    }
}));
