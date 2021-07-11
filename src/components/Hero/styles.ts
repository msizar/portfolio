import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import image from '../../assets/images/bg.svg';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    heroRoot: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'inherit',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
      },
    },

    heroNav: {
      display: 'flex',
      margin: '20px',
      maxWidth: '100%',
      justifyContent: 'center',
      paddingTop: '2em',

      [theme.breakpoints.up('md')]: {
        maxWidth: '70%',
        paddingTop: '4em',
      },
    },

    heroBtn: {
      color: colors.white,
      margin: '10px',
    },

    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
      minHeight: '20px',

      [theme.breakpoints.up('md')]: {
        minHeight: '50px',
      },
    },

    homeArrow: {
      position: 'relative',
    },

    '@keyframes fadeIn': {
      '0%': {
        opacity: '0',
      },
      '100%': {
        opacity: '1',
      },
    },
  }),
);

export default styles;
