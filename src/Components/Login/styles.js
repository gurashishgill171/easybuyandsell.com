import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    login: {
        backgroundColor: '#eeeeee',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login_container: {
        backgroundColor: '#ffffff',
        border: '2px solid red',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
    },
    login_logo: {
        width: '350px',
        objectFit: 'contain',
        marginBottom: '20px',
    },
    form_container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
    },
    form_elements: {
        width: '100%',
    }
    // paper: {
    //     height: 'auto',
    //     width: '100%',
    //     maxWidth: '620px',
    //     marginLeft: theme.spacing(3),
    //     marginRight: theme.spacing(3),
    // },
    // title:{
    //     width: '100%',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     fontSize: '24px',
    //     marginTop: theme.spacing(4),
    // },
    // textfields: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginLeft: theme.spacing(4),
    //     marginRight: theme.spacing(4),
    //     marginTop: theme.spacing(4),
    // },
    // btnwrapper: {
    //     width : '100%',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: theme.spacing(4),
    //     marginBottom: theme.spacing(4),
    // },
    // btn: {
    //     marginLeft: theme.spacing(2),
    // }
}))