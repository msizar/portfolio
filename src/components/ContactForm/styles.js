import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/styles/colors';

const styles = makeStyles((theme) => ({
  contactFormRoot: {
    padding: theme.spacing(5, 5),
    boxShadow: 'unset',
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

    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      padding: '20px 0px',
    },
  },

  submitBtn: {
    justifyContent: 'flex-end',
    display: 'grid',
  },
}));


export default styles;
