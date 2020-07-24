import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import { colors } from '../../assets/colors';

// const drawerWidth = 240;

const styles = makeStyles((theme: Theme) =>
  createStyles({
    skillRoot: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
    },

    skillGrid: {
      maxWidth: '100%',
      justifyContent: 'center',
      margin: '10px',

      [theme.breakpoints.up('md')]: {
        display: 'flex',
        maxWidth: '70%',
      },
    },

    skillGridItem: {
      cursor: 'pointer',
      transition: 'all 1s',

      '&:hover': {
        marginTop: '-10px',
        transform: 'scale(1.2)',
        cursor: 'pointer',
        boxShadow: '0px 12px 30px 0px rgba(0, 0, 0, 0.2)',
        transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },

    skillIcon: {
      background: colors.white,
    },

    skillImg: {
      width: '100%',
      padding: '5px 5px',
      background: colors.white,
    },
  }),
);

export default styles;
