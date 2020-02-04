import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  card: {
    display: 'flex',
    minHeight: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '50%',
  },


});

export default styles;
