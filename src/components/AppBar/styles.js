import { makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({


  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  toolbar: {
    padding: '0px',
    backgroundColor: colors.whiteText,
    display: 'flex',
    '-webkit-box-pack': 'justify',
    justifyContent: 'space-between',
    '-webkit-box-align': 'center',

    [theme.breakpoints.down('sm')]: {
      width: 'unset',
      justifyContent: 'start',
    },
  },

  AppLogoContainer: {
    width: '50%',
    background: colors.linearBackground,
    padding: 20,
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      padding: 10,
      width: 'unset',
    },
  },

  navBar: {
    padding: 20,
    width: '50%',
    backgroundColor: colors.whiteText,
    textAlign: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    },
  },


}));

export default styles;
