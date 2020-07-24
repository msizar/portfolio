import React from 'react';
import CardContent from '@material-ui/core/CardContent';

import useStyles from './styles';
import { Text, Heading } from '../Typography';

type Props = {
  children: string;
  title: string;
};

const AboutMeRoot: React.FC<Props> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutMeRoot}>
      <div className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Heading>{title}</Heading>
            <div className={classes.aboutMeRootText}>
              <Text>{children}</Text>
            </div>
          </CardContent>
        </div>
        {/* <CardMedia
          className={classes.cover}
          image={profile}
          title="Live from space album cover"
        /> */}
      </div>
    </div>
  );
};

export default AboutMeRoot;
