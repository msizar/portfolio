import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    homeRoot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
      height: '100%',
      flexDirection: 'column',

      [theme.breakpoints.up('md')]: {},
    },

    heading: {
      position: 'relative',
      textAlign: 'center',
    },
  }),
);

export default styles;
