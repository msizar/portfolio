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

    projectGrid: {
      maxWidth: '100%',
      justifyContent: 'center',
      margin: '3em 10px',
      maxHeight: '90vh',
      overflow: 'auto',

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
        transform: 'scale(1)',
        cursor: 'pointer',
        boxShadow: '0px 12px 30px 0px rgba(0, 0, 0, 0.2)',
        transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },

    projectCardActions: {},

    projectCardContent: {
      minHeight: '150px',
      maxHeight: '150px',
    },

    skillIcon: {
      background: colors.white,
    },

    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      fontSize: '.9em',
    },
  }),
);

export default styles;
