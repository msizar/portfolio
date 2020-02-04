import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({


  root: {
    color: theme.palette.getContrastText(colors.backgroundColor),
    backgroundColor: colors.backgroundColor,

  },
  margin: {
    margin: theme.spacing(2, 0),
    color: colors.backgroundColor,
    borderColor: colors.backgroundColor,
    padding: 10,
    '&:hover': {
      backgroundColor: colors.backgroundColor,
      borderColor: colors.backgroundColor,
      color: colors.whiteText,
    },
  },


  square: {
    '&:hover': {
      width: '100%',
    },

    '&:before': {
      width: '100%',
    },

    '&:after': {
      width: '100%',
      backgroundColor: 'red',
      transition: '0.25s all ease 0.4s',

    },

    '&:hover,&:before,  &:hover,&:after': {
      height: 'calc(100% + 0.4em)',
    },


  },


  individual: {
    '&:after': {

      backgroundColor: 'red',
      transition: '0.25s all ease 0.4s',

    },
  },


}));

export default styles;
