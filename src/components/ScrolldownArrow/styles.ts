import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    arrowCenter: {
      position: 'absolute',
      top: '40px',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '0',
      height: '50px',
      borderLeft: '6px dashed rgba(255,255,255,.1)',
    },

    arrowIcon: {
      color: colors.white,
      fontSize: '3em',
      fontWeight: 'bolder',
    },

    arrow: {
      position: 'absolute',
      top: '0',
      left: '-24px',
      height: '20px',
      width: '0px',
      background: '#fff',
      animation: '$animate 3s infinite',

      '&:before': {
        content: '',
        position: 'absolute',
        bottom: '0',
        left: '-10px',
        width: '20px',
        height: '20px',
        borderBottom: '6px solid #fff',
        borderRight: '6px solid #fff',
        transform: 'rotate(45deg)',
      },
    },

    '@keyframes animate': {
      '0%': {
        transform: 'translateY(0)',
        opacity: '0.5',
      },
      ' 50%': {
        transform: 'translateY(20px)',
        opacity: 1,
      },
      '100%': {
        transform: 'translateY(50px)',
        opacity: '0',
      },
    },
  }),
);

export default styles;
