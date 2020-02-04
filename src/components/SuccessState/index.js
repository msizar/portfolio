import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';

import thumbImage from '../../assets/images/thumbs.png';
import styles from './styles';

const SuccessState = (props) => {
  const {
    response,
  } = props;
  const classes = styles();
  return (
    <Paper className={classes.root}>
      <img src={thumbImage} alt="thumbup" />
      <Typography
        className={classes.title}
        variant="h6"
        component="h3"
        data-aos="fade-right"
        data-aos-offset="90"
        data-aos-delay={33}
        data-aos-duration={1000}
        data-aos-easing="ease-in-sine"
      >

        Hey
        {response ? response.data : ' '}
        your request has been sent, I will reply to you ASAP
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset={90}
          data-aos-duration={1000}
        />
      </Typography>
    </Paper>
  );
};

SuccessState.propTypes = {
  response: PropTypes.shape({
    data: PropTypes.string.isRequired,
  }),

};

SuccessState.defaultProps = {
  response: null,
};
export default SuccessState;
