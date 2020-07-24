import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    arrowCenter: {
      position: 'absolute',
      top: '80px',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '0',
      height: '50px',
      borderLeft: '6px dashed rgba(255,255,255,.1)',
    },
    avatar: {
      margin: 10,
      '&:hover': {
        backgroundColor:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(222, 45, 45) 100%);',
      },
    },
  }),
);

export default styles;
