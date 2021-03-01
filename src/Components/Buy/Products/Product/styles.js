import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
    toolbar: theme.mixins.toolbar,
    root: {
        maxWidth: '100%',
        margin: theme.spacing(2),
    },
    media: {
        border: '2px solid red',
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
    }
}))