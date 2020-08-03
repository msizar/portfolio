import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    namesRoot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
      marginTop: '2em',
      height: '100%',
      flexDirection: 'column',

      [theme.breakpoints.up('md')]: {
        marginTop: '3em',
      },
    },

    namesHeading: {
      position: 'relative',
      textAlign: 'center',
    },
  }),
);

export default styles;
