import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import profileImg from '../../assets/images/profileImg.png';

import useStyles from './styles';
import { CV_LINK } from '../../constants/links';

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
        badgeContent={'CV'}
        classes={{ badge: classes.badge, dot: classes.dot }}
        onClick={() => {
          window.location.assign(CV_LINK);
        }}
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
