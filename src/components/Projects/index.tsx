import React, { Fragment } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';
import { Title } from '../Typography';
import Buttons from '../Buttons';
import projects, { Project } from '../../constants/projects';

type Props = {};
const Projects: React.FC<Props> = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const Cards = (project: Project) => (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.projectCardContent}>
        <Typography variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {project.stack.map((tool) => (
            <Fragment key={tool}>
              {bull}
              {tool}
            </Fragment>
          ))}
        </Typography>
        <Typography variant="body2" component="p">
          {project.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions className={classes.projectCardActions}>
        {project.links.map((link: any) => (
          <Buttons key={link.url} link={link.url} variant="link">
            {link.site}
          </Buttons>
        ))}
      </CardActions>
    </Card>
  );

  return (
    <div className={classes.skillRoot}>
      <Title>My projects</Title>
      <Grid className={classes.projectGrid} container spacing={2}>
        {projects.map((project: Project) => (
          <Grid
            className={`${classes.skillGridItem} animate__animated animate__zoomIn`}
            key={project.title}
            item
            lg={4}
            md={6}
            sm={6}
            xs={10}
          >
            {Cards(project)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
