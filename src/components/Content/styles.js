import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({
  contentRoot: {
    padding: theme.spacing(5, 5),
    boxShadow: 'unset',
  },

  title: {
    textTransform: 'uppercase',
    width: 'fit-content',
  },

  divider: {
    padding: 2,
    width: '15%',
    backgroundColor: colors.backgroundColor,
  },

  contentMoreText: {
    textAlign: 'left',
  },
}));


export default styles;
