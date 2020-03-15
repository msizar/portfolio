import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';


const drawerWidth = '50%';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    backgroundColor: colors.backgroundColor,
    width: drawerWidth,
    flesmhrink: 0,

    [theme.breakpoints.down('sm')]: {
      width: 'unset',

    },
  },

  AppLink: {
    padding: '20px ',
    color: colors.backgroundColor,
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
      color: colors.backgroundColor,
    },

    [theme.breakpoints.down('sm')]: {
      padding: '10px ',

    },
  },

  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: 'unset',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 0,
    },
  },

  activeAppLink: {
    textDecoration: 'underline',

  },


  toolbar: theme.mixins.toolbar,
}));

export default styles;
