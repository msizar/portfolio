import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import styles from './styles';

const ImageAvatars = (props) => {
  const { picture } = props;
  const classes = styles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      data-aos="zoom-in"
      data-aos-offset={90}
      data-aos-delay={40}
      data-aos-duration={1000}
    >
      <Avatar alt="Remy Sharp" src={picture} className={classes.bigAvatar} />
    </Grid>
  );
};

ImageAvatars.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default ImageAvatars;
