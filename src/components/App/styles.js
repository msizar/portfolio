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
    flexShrink: 0,

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
  },

  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: 'unset',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  activeAppLink: {
    textDecoration: 'underline',

  },


  toolbar: theme.mixins.toolbar,
}));

export default styles;
