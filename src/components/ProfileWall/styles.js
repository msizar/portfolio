import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({

  wallDrawer: {
    width: 'fit-content',
    height: 600,
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      height: 540,
    },
  },

  wallText: {
    color: colors.whiteText,
    [theme.breakpoints.down('sm')]: {
    },
  },

  particles: {
    position: 'absolute',
    left: 0,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  profileArrow: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      width: 'unset',
      color: colors.whiteText,
      fontSize: '2.5rem',
    },
  },

}));


export default styles;
