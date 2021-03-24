import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footerContainer: {
        margin: 0,
        width: '100%',
        height: '450px',
        backgroundColor: '#000000FF',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
        }
    },
    logo:{
        width: '100%',
        height: '45%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    links: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    linkitems: {
        margin: '21px 30px',
    },
    titles:{
        fontSize: '21px',
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
        }
    },
    socialLinks:{
        width: '100%',
        height: '30%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    flex:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lastfooter:{
        display:'flex',
        height: '49px',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))