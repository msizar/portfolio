import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import styles from './styles';

const Buttons = (props) => {
  const { children, handleClick, type } = props;
  const classes = styles();

  return (
    <span className={`${classes.square}  ${classes.individual}`}>
      <Button variant="outlined" color="primary" type={type} onClick={handleClick} className={classes.margin}>
        {children}
      </Button>
    </span>
  );
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Buttons.defaultProps = {
  type: null,
};

export default Buttons;
