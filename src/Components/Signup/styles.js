import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    container:{
        backgroundColor: '#3f51b5',
        margin: 0,
        boxSizing: 'border-box',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '56px',
    },
    paper: {
        height: 'auto',
        width: '100%',
        maxWidth: '670px',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        padding: theme.spacing(2),
    },
    formTitle: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        fontSize: '23px',
    },
    btn: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
    },
    error: {
        fontSize: '16px',
        fontStyle: 'italic',
        color: 'red',
        margin: 0,
    },
    foot: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(3),    
        marginBottom: theme.spacing(3),    
    },
    btn2: {
        marginLeft: theme.spacing(2),
    }
}))