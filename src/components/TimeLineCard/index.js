import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './styles';


const TimeLineCard = (props) => {
  const { title, description, responsibility } = props;
  const classes = styles();


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} component="h5">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          {responsibility}
        </Typography>
      </CardContent>
    </Card>
  );
};

TimeLineCard.propTypes = {
  responsibility: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default TimeLineCard;
