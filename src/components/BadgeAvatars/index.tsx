import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import profileImg from '../../assets/images/profileImg.png';

import useStyles from './styles';

const BadgeAvatars = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
        classes={{ badge: classes.badge, dot: classes.dot }}
      >
        <Avatar
          alt="Themba Msiza"
          src={profileImg}
          className={classes.avatar}
        />
      </Badge>
    </div>
  );
};

export default BadgeAvatars;
