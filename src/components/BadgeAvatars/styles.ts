import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },

    badge: {
      backgroundColor: '#44b700',
      color: colors.white,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      cursor: 'pointer',
      padding: '2px',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',

        animation: '$ripple 1.2s infinite ease-in-out',
        border: '2px solid #44b700',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },

    dot: {
      height: '10px',
      width: '10px',
      borderRadius: '10px',
    },

    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      fontSize: '2.5em',
      fontWeight: 600,
      border: `solid ${colors.darkRed}`,

      [theme.breakpoints.up('md')]: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        fontSize: '3em',
      },
    },
  }),
);

export default styles;
