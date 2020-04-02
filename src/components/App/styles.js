import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  app: {
    textAlign: 'center',
    height: '100%',
  },

  title: {
    color: colors.backgroundColor,
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
}));

export default styles;
