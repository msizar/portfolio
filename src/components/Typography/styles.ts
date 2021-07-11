import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      marginTop: 0,
      fontSize: '28px',
      textTransform: 'uppercase',
      color: colors.white,
    },

    title: {
      margin: '0 0 20px 0',
      fontSize: '2em',
      color: colors.white,

      [theme.breakpoints.up('md')]: {
        fontSize: '3em',
      },
    },

    heading: {
      marginTop: 0,
      fontSize: '3em',
      textTransform: 'uppercase',
      color: colors.white,

      [theme.breakpoints.up('md')]: {
        fontSize: '28px',
      },
    },

    text: {
      fontSize: '1.3em',
      margin: '10px 0px',
      color: colors.white,
      lineHeight: '26px',
    },

    errorText: {
      color: colors.error,
      marginTop: '5px',
    },
  }),
);

export default styles;
