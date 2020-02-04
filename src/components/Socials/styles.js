import { makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/styles/colors';

const styles = makeStyles({
  rootGrid: {
    margin: 20,
  },

  links: {
    background: 'red',
    margin: 10,
    color: colors.whiteText,
    '&:hover': {
      backgroundColor: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(222, 45, 45) 100%);',


    },
  },

  avatar: {
    margin: 10,
    '&:hover': {
      backgroundColor: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(222, 45, 45) 100%);',


    },
  },

});

export default styles;
