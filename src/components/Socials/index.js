import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import SOCIAL_LINKS from '../../assets/constants/socialLinks';
import styles from './styles';


export default function IconAvatars() {
  const classes = styles();

  return (
    <Grid container justify="center" alignItems="center">
      {
        SOCIAL_LINKS.map((soc) => (
          <a key={soc.name} className={classes.AppLink} href={soc.link}>
            <Avatar alt={soc.name} src={soc.icons} className={classes.avatar} />
          </a>
        ))
      }

    </Grid>
  );
}
