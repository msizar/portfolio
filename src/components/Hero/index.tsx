import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';
import Buttons from '../Buttons';
import { LINK_ARRAY } from '../../constants/links';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

type Props = {
  activeLink: string;
  setActiveNavHandler: (nav: string) => void;
  children: any;
};
const Hero: React.FC<Props> = ({
  activeLink,
  children,
  setActiveNavHandler,
}) => {
  const classes = useStyles();
  const history = useHistory();

  console.log(history);

  return (
    <div className={classes.heroRoot}>
      {/* {history.location.pathname !== '/home' && (
        <div className="animate__animated animate__backInDown animate__delay-1s">
          <TypingAnimation>THEMBA MSIZA</TypingAnimation>
          <Typography>Software developer</Typography>
        </div>
      )} */}
      <Grid className={classes.heroNav} container spacing={2}>
        {LINK_ARRAY.map((link) => (
          <Grid key={uuidv4()} item lg={2} md={2} sm={2} xs={4}>
            <Buttons
              key={link}
              active={window.location.pathname.split('/')[1] === link}
              variant="outlined"
              handleOnClick={() => setActiveNavHandler(link)}
            >
              {link}
            </Buttons>
          </Grid>
        ))}
      </Grid>
      <div></div>
      <div className={classes.drawerHeader} />
      {children}
    </div>
  );
};

export default Hero;
