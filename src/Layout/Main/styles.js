import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';


const drawerWidth = '50%';

const styles = makeStyles((theme) => ({


  drawer: {
    backgroundColor: colors.backgroundColor,
    width: drawerWidth,
    flesmhrink: 0,

    [theme.breakpoints.down('sm')]: {
      width: 'unset',

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

}));

export default styles;
