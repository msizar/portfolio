import React, { Component } from 'react';

import TIMELINE_STEPS, { EXPERIENCE_INFO } from '../../assets/constants/experience';
import TimeLine from '../../components/TimeLine';
import Main from '../../Layout/Main';


class Experience extends Component {
  constructor(props) {
    super(props);

    const stepsId = EXPERIENCE_INFO.map((data) => data.id);
    this.state = {
      activeSteps: [...stepsId],

    };
  }

getStepContent = (step) => EXPERIENCE_INFO[step]

   activateSteps = (step) => () => {
     const { activeSteps } = this.state;
     const stepIndex = activeSteps.indexOf(step);
     const activeStepsCopy = activeSteps;

     if (stepIndex > -1) {
       activeStepsCopy.splice(stepIndex, 1);
       this.setState({ activeSteps: activeStepsCopy });
     } else {
       activeStepsCopy.push(step);
       this.setState({ activeSteps: activeStepsCopy });
     }
   }

   render() {
     const steps = TIMELINE_STEPS;
     const { activeSteps } = this.state;

     return (
       <Main hide>
         <TimeLine
           steps={steps}
           activeSteps={activeSteps}
           activateStep={this.activateSteps}
           getStepContent={this.getStepContent}
           title="Experience"
         />
       </Main>

     );
   }
}

export default Experience;
