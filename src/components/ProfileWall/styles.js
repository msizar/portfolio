import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({

  wallDrawer: {
    width: 'fit-content',
    height: 600,
  },

  wallText: {
    color: colors.whiteText,
    [theme.breakpoints.down('sm')]: {
    },
  },

}));


export default styles;
