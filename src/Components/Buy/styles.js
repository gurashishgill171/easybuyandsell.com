import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        minHeight: '100vh',
        marginTop: theme.spacing(8),
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    search: {
        marginTop: '75px',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchbar: {
        width: '50%',
        height: '45px',
        fontSize: '19px',
    },
    notloggedin:{
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
}))