import { makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 5),
    boxShadow: 'unset',
    textAlign: 'center',
    background: 'unset',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(20),
  },
  circle: {
    color: colors.backgroundColor,
  },
  margin: {
    margin: theme.spacing(1),
  },

}));
export default styles;
