import {makeStyles} from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

export default makeStyles((theme)=>({
    main: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(14),
        padding: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'center',
        }
    },
    slider: {
        maxWidth: '970px',
    },
    info: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            marginTop: '0',
            marginLeft: theme.spacing(8),
        },
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(4),
        padding: theme.spacing(3),
    },
    sellerinfo: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
    },
    heading: {
        fontSize: '28px',
        fontWeight: 'bold',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    title:{
        fontSize: '23px',
    },
    title2: {
        fontSize: '19px',
        fontStyle: 'italic',
    },
    heading2:{
        display: 'flex',
        alignItems: 'center',
        fontStyle: 'italic',
    },
    price:{
        fontSize: '21px',
        fontStyle: 'italic',
        fontWeight: 'bolder',
    },
}))

