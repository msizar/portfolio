import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';

import Buttons from '../Buttons';
import useStyles from './styles';
import { Title, Text } from '../Typography';
import { CONTACT } from '../../constants/links';

const Success: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

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

          <Buttons
            variant="outlined"
            handleOnClick={() => history.push(CONTACT)}
          >
            <a className={classes.link} href={CONTACT}>
              {'＜ '}Return to form
            </a>
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default Success;
