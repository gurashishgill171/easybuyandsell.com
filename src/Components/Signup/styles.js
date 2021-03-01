import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    container:{
        margin: 0,
        boxSizing: 'border-box',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        height: '500px',
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
    }
}))