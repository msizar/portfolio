import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({

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

  activeAppLink: {
    textDecoration: 'underline',
  },

  headerLogoContainer: {
    fontWeight: '800',
    width: '50%',
    background: colors.linearBackground,
    textAlign: 'initial',
    padding: '30px 0px',

    [theme.breakpoints.down('sm')]: {
      width: '25%',
    },
  },

  headerLogo: {
    borderRadius: '50%',
    border: 'solid',
    padding: '10px 5px',
    fontWeight: '800',
    color: colors.whiteText,
    fontSize: '20px',
    marginLeft: '20px',
  },

  headerNavBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'normal',
    },
  },

  headerAppNav: {
    padding: '0',
    width: '50%',

    [theme.breakpoints.down('sm')]: {
      marginLeft: 5,
    },
  },

}));

export default styles;