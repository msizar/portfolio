import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({

  mainRoot: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },

  mainLeft: {
    flexShrink: 0,
    background: colors.linearBackground,
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',

    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    },
  },

  mainRight: {
    flexGrow: 1,
    width: '50%',
    height: '100%',
    overflow: 'auto',

    [theme.breakpoints.down('sm')]: {
      width: 'unset',
      padding: 0,
      overflow: 'unset',

    },
  },

}));

export default styles;
