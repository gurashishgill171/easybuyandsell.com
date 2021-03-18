import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
    toolbar: theme.mixins.toolbar,
    root: {
        maxWidth: '100%',
        margin: theme.spacing(2),
        textDecoration: 'none',
        backgroundColor: '#eeeeee',
    },
    media: {
        borderBottom: '1px solid #616161',
        width: 'auto',
        height: '210px',
    },
    cardcontent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardactions: {
        display: 'flex',
        alignItems: 'center',
       
    },
    cardactionitem1: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start' 
    },
    cardactionitem2: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end' 
    },
    title: {
        fontWeight: 'bold',
        fontFamily :'sans-serif',
    },
    price: {
        fontSize: '24px',
        fontWeight: 'bolder',
        fontStyle: 'italic',
    },
    checkoutBtn:{
        color: '#ffffff',
        fontStyle: 'italic'
    }
}))