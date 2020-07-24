import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const drawerWidth = 240;

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      backgroundColor: 'transparent',
      color: colors.dark,

      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },

    title: {
      flexGrow: 1,
    },

    hide: {
      display: 'none',
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },

    drawerPaper: {
      width: drawerWidth,
    },

    content: {
      minHeight: '100vh',
      flexGrow: 1,

      // marginRight: -drawerWidth,
    },

    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }),
);

export default styles;
