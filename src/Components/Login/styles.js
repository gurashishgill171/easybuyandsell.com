import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    container: {
        backgroundColor: '#3f51b5',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        height: 'auto',
        width: '100%',
        maxWidth: '620px',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    title:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        marginTop: theme.spacing(4),
    },
    textfields: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        marginTop: theme.spacing(4),
    },
    btnwrapper: {
        width : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    btn: {
        marginLeft: theme.spacing(2),
    }
}))