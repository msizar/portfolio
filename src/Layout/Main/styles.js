import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({

  mainRoot: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '100%',
  },

  mainLeft: {
    flexShrink: 0,
    background: colors.linearBackground,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    },
  },

  mainRight: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '50%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 0,
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
