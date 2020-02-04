import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({

  card: {
    minWidth: 275,

    boxShadow: 'unset',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: '30px',
    padding: 0,
  },

  subHeader: {
    width: 'fit-content',
  },

  info: {
    margin: 0,
  },

  resumeLink: {
    color: 'inherit',
    textDecoration: 'inherit',
    cursor: 'inherit',
  },
});

export default styles;
