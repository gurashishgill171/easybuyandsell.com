import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    SlideContainer: {
        position: 'relative',
        overflow: 'hidden',
        height: '650px',
        width: '60%',
        border: '2px solid red',
    },
    slide: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0'
    },
    current: {
        opacity: '1',
    },
    img: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    btnNext: {
        position: 'absolute',
        top: '50%',
        right: '15px',
        color: 'white',
        border: '2px solid white',
        backgroundColor: 'transparent',
        color: 'white',
        cursor: 'pointer',
        padding: '13px 15px',
        borderRadius: '50%',
    },
    btnPrev: {
        position: 'absolute',
        top: '50%',
        left: '15px',
        color: 'white',
        border: '2px solid white',
        backgroundColor: 'transparent',
        color: 'white',
        cursor: 'pointer',
        padding: '13px 15px',
        borderRadius: '50%',
    }
}))

// .slide:first-child {
//     background: url('https://source.unsplash.com/RyRpq9SUwAU/1600x900') no-repeat
//       center top/cover;
//   }
//   .slide:nth-child(2) {
//     background: url('https://source.unsplash.com/BeOW_PJjA0w/1600x900') no-repeat
//       center top/cover;
//   }
//   .slide:nth-child(3) {
//     background: url('https://source.unsplash.com/TMOeGZw9NY4/1600x900') no-repeat
//       center top/cover;
//   }
//   .slide:nth-child(4) {
//     background: url('https://source.unsplash.com/yXpA_eCbtzI/1600x900') no-repeat
//       center top/cover;
//   }
//   .slide:nth-child(5) {
//     background: url('https://source.unsplash.com/ULmaQh9Gvbg/1600x900') no-repeat
//       center top/cover;
//   } 
//   .slide:nth-child(6)  {
//     background: url('https://source.unsplash.com/ggZuL3BTSJU/1600x900') no-repeat
//       center center/cover;
//   }