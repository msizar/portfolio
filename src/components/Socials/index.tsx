import React from 'react';

import useStyles from './styles';
import { Grid, Avatar } from '@material-ui/core';
import SOCIAL_LINKS from '../../assets/constants/socialLinks';

const Socials: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      {SOCIAL_LINKS.map((soc) => (
        <a key={soc.name} href={soc.link}>
          <Avatar
            alt={soc.name}
            src={soc.icons}
            className={classes.avatar}
          />
        </a>
      ))}
    </Grid>
  );
};

export default Socials;
