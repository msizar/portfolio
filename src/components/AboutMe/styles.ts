import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    aboutMeRoot: {
      width: '90%',
      background: colors.darkOverlay,
      margin: 'auto',
    },

    aboutMeRootText: {
      padding: '10px 0px',
    },

    root: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '2em 0',
      marginTop: '2em',
      maxWidth: '1140px',
      boxShadow: 'unset',
      margin: 'auto',
      flexDirection: 'column-reverse',

      [theme.breakpoints.up('md')]: {
        marginTop: '5em',
        flexDirection: 'initial',
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '0px 20px',

      [theme.breakpoints.up('md')]: {
        width: '95%',
        padding: 'unset',
      },
    },
    content: {
      flex: '1 0 auto',
      textAlign: 'center',
    },
    cover: {
      width: '350px',
      height: ' 350px',
      backgroundSize: 'auto',
      backgroundPosition: 'right',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

export default styles;
