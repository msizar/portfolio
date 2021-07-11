import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { SKILLS_ICON } from '../../constants/skills';
import { Title } from '../Typography';

type Props = {};
const Skills: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.skillRoot}>
      <Title>My skills</Title>
      <Grid className={classes.skillGrid} container spacing={2}>
        {SKILLS_ICON.map((link) => (
          <Grid
            className={`${classes.skillGridItem} animate__animated animate__zoomIn`}
            key={uuidv4()}
            item
            lg={2}
            md={2}
            sm={2}
            xs={4}
          >
            <div className={classes.skillImg}>
              <img
                className={classes.skillIcon}
                src={link}
                alt="link"
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
