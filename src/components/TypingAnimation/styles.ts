import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    typingTitle: {
      margin: 0,
      fontSize: '2em',
      textTransform: 'uppercase',
      color: colors.white,
      textAlign: 'center',
      borderBottom: 'solid 1px',

      [theme.breakpoints.up('md')]: {
        fontSize: '2.5em',
      },
    },

    typingCursor: {
      position: 'absolute',
      top: '0',
      right: '-5px',
      background: '#221d35',
      width: '100%',
      borderLeft: '0em solid transparent',
      '-webkit-animation':
        '$typing 2s steps(16) forwards, $cursor 1s infinite',
      animation: '$typing 2s steps(16) forwards, $cursor 1s infinite',
    },

    /* Animation */
    '@keyframes typing': {
      from: { width: '100%' },
      to: { width: 0 },
    },
    '@keyframes cursor': {
      '50%': { borderColor: colors.dark },
    },
  }),
);

export default styles;
