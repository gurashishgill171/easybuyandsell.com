import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) =>({
    appbar: {
        boxShadow: '1px solid black',
        [theme.breakpoints.up('sm')] :{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    grow: {
        flexGrow : 1,
    },
    image: {
        height: '60px',
        margin: '10px 0px',
        [theme.breakpoints.up('md')]: {
            height: '75px',
        }
    },
    mobileversion: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    desktopversion: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    text:{
        fontSize: '22px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        }
    },
    iconbtn: {
        paddingRight: '9px',
        fontSize: '1.4em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em',
        }
    },
    badge: {
            top: '-4px',
            right: '4px',
    },
    center:{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accordwrapper:{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       padding: '0px 5px',
    }
}));
