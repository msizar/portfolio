import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ArrowDownward } from '@material-ui/icons';

import useStyles from './styles';

const ScrolldownArrow: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.arrowCenter}>
      <div className={classes.arrow}>
        <ArrowDownward className={classes.arrowIcon} />
      </div>
    </div>
  );
};

export default ScrolldownArrow;
