import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const drawerWidth = 280;

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: '100%',
    flexShrink: 0,
    background: colors.linearBackground,
    minHeight: '100vh',

    [theme.breakpoints.down('sm')]: {
    },
  },

  drawerPaper: {
    width: drawerWidth,

    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    },
  },

  introText: {
    color: colors.whiteText,
  },

  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(30),
    textAlign: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      marginTop: 120,
    },
  },

  particles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      height: '70%',
    },
  },

}));


export default styles;
