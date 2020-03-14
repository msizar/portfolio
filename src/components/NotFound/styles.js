import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 5),
    boxShadow: 'unset',
    textAlign: 'center',
    background: 'unset',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(20),
  },

  title: {
    textTransform: 'uppercase',
    width: 'fit-content',
  },


  textField: {
    margin: theme.spacing(1, 0),
    '& label.Mui-focused': {
      color: colors.backgroundColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.backgroundColor,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colors.backgroundColor,
      },
      '&:hover fieldset': {
        borderColor: colors.backgroundColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.backgroundColor,
      },
    },
  },

  divider: {
    padding: 2,
    width: '15%',
    backgroundColor: colors.backgroundColor,
  },

  paper: {
    padding: theme.spacing(5, 5),
  },

  subTitle: {
    textAlign: 'center',
    padding: 20,
  },

  submitBtn: {
    justifyContent: 'flex-end',
    display: 'grid',
  },
}));


export default styles;
