import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  Divider, List, ListItem, ListItemText,
} from '@material-ui/core';

import PERSONAL_INFORMATION from '../../assets/constants/personalInformation';
import RESUME from '../../assets/Documents/resume.pdf';
import styles from './styles';
import Dividers from '../Divider';
import Buttons from '../Button';

const DetailsCard = (props) => {
  const { subHeader } = props;
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography
          className={classes.subHeader}
          variant="h6"
          component="h3"
          data-aos="fade-right"
          data-aos-offset="90"
          data-aos-delay={33}
          data-aos-duration={1000}
          data-aos-easing="ease-in-sine"
        >
          {subHeader}
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset={90}
            data-aos-duration={1000}
          >
            <Dividers />
          </div>
        </Typography>


        <List>
          {PERSONAL_INFORMATION.map((line) => (
            <div key={line.label} className={classes.info}>
              <ListItem disableGutters>
                <ListItemText primary={`${line.label}: ${line.value}`} />
              </ListItem>
              <Divider component="li" />
            </div>

          ))}
        </List>

        <div>
          <Buttons handleClick={() => {}}>
            <a
              className={classes.resumeLink}
              href={RESUME}
              download
            >
              Download Resume As Pdf
            </a>

          </Buttons>
        </div>
      </CardContent>
    </Card>
  );
};

DetailsCard.propTypes = {
  subHeader: PropTypes.string.isRequired,
};

export default DetailsCard;
