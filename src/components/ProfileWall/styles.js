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
    backgroundColor: colors.backgroundColor,
    minHeight: '100vh',


  },
  drawerPaper: {
    width: drawerWidth,
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
  },

}));


export default styles;
