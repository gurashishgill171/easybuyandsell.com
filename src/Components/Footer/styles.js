import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footerlayout: {
        marginTop: theme.spacing(16),
        backgroundColor: '#94bbe9',
        height: 'auto',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(4),
    },
    itemWarper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: '156px',
        height: '74px',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px 0px',
    },
    title:{
        fontSize: '26px',
        fontWeight: 'bold',
        justify: 'center',
        padding: '25px 0px',
    },
    subtext: {
        fontSize: '16px',
    }
}))