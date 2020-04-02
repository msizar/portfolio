import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import DetailsCard from '../DetailsCard';
import styles from './styles';
import Dividers from '../Divider';


const Content = (props) => {
  const { title, moreText } = props;
  const classes = styles();

  return (
    <div>
      <Paper className={classes.contentRoot}>
        <Typography
          className={classes.title}
          variant="h6"
          component="h3"
          data-aos="fade-right"
          data-aos-offset="90"
          data-aos-delay={33}
          data-aos-duration={1000}
          data-aos-easing="ease-in-sine"
        >
          {title}
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset={90}
            data-aos-duration={1000}
          >
            <Dividers />
          </div>
        </Typography>


        <div
          className={classes.contentMoreText}
          data-aos="fade-up"
          data-aos-offset={90}
          data-aos-delay={45}
          data-aos-duration={910}
          data-aos-anchor-placement="top-bottom"
        >
          <Typography component="p">
            {moreText}
          </Typography>
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset={90}
          data-aos-delay={47}
          data-aos-duration={1000}
          data-aos-anchor-placement="top-bottom"
        >
          <DetailsCard subHeader="PERSONAL DETAILS " />
        </div>
      </Paper>
    </div>
  );
};
Content.propTypes = {
  title: PropTypes.string.isRequired,
  moreText: PropTypes.string.isRequired,
};

export default Content;
