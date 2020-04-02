import { makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({
  root: {

    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: colors.whiteText,
    padding: '40px 40px',
  },
  button: {
    marginLeft: theme.spacing(-1.5),
  },

  icon: {
    background: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(222, 45, 45) 100%);',
    color: colors.whiteText,
    borderRadius: 20,
    padding: 5,
  },

  timeLineStepper: {
    background: 'unset',
    padding: '40px 10px',

    [theme.breakpoints.down('sm')]: {
      padding: '40px 0px',
    },
  },

  title: {
    textTransform: 'uppercase',
    width: 'fit-content',

  },

  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default styles;
