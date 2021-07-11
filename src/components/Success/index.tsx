import React from 'react';
import CardContent from '@material-ui/core/CardContent';

import useStyles from './styles';
import { Title, Text } from '../Typography';

const Success: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.successRoot}>
      <div className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Title>Success!</Title>
            <Text>
              Yey!!!{' '}
              <span role="img" aria-label=":)">
                😃
              </span>
               your request has been sent successfully, we will get
              back to you as soon as we can, we cannot wait to work
              with you! 
            </Text>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default Success;
