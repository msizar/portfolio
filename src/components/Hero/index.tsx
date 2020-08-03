import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';
import Buttons from '../Buttons';
import { LINK_ARRAY } from '../../constants/links';
import { Grid } from '@material-ui/core';

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

  return (
    <div className={classes.heroRoot}>
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
