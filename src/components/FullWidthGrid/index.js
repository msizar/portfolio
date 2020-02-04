import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import ProfileCard from '../ProfileCard';
import styles from './styles';


const FullWidthGrid = (props) => {
  const { users } = props;
  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {users.map((user, index) => (
          <Grid key={user.id} item xs={6} sm={3}>
            <ProfileCard user={user} duration={index} className={classes.paper} />
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

FullWidthGrid.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default FullWidthGrid;
