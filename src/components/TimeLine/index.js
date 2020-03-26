import React from 'react';
import PropTypes from 'prop-types';
import {
  StepContent, Typography, Step, Stepper,
  StepButton,
} from '@material-ui/core';
import { School, BusinessCenter } from '@material-ui/icons';

import styles from './styles';
import Dividers from '../Divider';
import TimeLineCard from '../TimeLineCard';
import { EXPERIENCE_INFO } from '../../assets/constants/experience';

const TimeLine = (props) => {
  const {
    activeSteps, activateStep,
  } = props;
  const classes = styles();


  return (
    <div className={classes.root}>
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
        Working Experience
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset={90}
          data-aos-duration={1000}
        >
          <Dividers />
        </div>
      </Typography>

      <Stepper orientation="vertical" className={classes.timeLineStepper}>
        {EXPERIENCE_INFO.map((step, index) => (
          <Step
            data-aos="fade-up"
            data-aos-delay={45}
            data-aos-offset={90}
            data-aos-duration={1000}
            data-aos-anchor-placement="top-bottom"
            active={activeSteps.indexOf(step.id) > -1}
            key={step.id}
          >
            <StepButton
              className={classes.button}
              onClick={activateStep(step.id)}
              disabled={false}
              completed
              icon={index === activeSteps.length - 1 ? (
                <School
                  className={classes.icon}
                  data-aos-delay={45}
                  data-aos="fade-up"
                  data-aos-offset={90}
                  data-aos-duration={1000}
                />
              )
                : (
                  <BusinessCenter
                    className={classes.icon}
                    data-aos-delay={45}
                    data-aos="fade-up"
                    data-aos-offset={90}
                    data-aos-duration={1000}
                  />
                )}
            >
              {step.period}
            </StepButton>
            <StepContent>
              <TimeLineCard
                title={step.name}
                responsibility={step.responsibility}
                description={step.description}
              />
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

TimeLine.propTypes = {
  activeSteps: PropTypes.arrayOf(PropTypes.number).isRequired,
  activateStep: PropTypes.func.isRequired,
};
export default TimeLine;
