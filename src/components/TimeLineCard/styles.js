import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  card: {
    minWidth: 275,

    [theme.breakpoints.down('sm')]: {
      width: '240px',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textTransform: 'uppercase',
  },
  pos: {
    marginBottom: 12,
  },
}));

export default styles;
