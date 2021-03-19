import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
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
}))