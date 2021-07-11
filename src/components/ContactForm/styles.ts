import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    contactRoot: {
      width: '90%',
      maxWidth:'500px',
      background: colors.darkOverlay,
      margin: 'auto',
      textAlign:'center',
      padding: 40,
    },
    textField: {},
    focused: {},
    title:{

    },
    subTitle:{

    },
    submitBtn:{

    },
  }),
);

export default styles;
