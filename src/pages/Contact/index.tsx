import React from 'react';

import useStyles from './styles';
import ContactForm from '../../components/ContactForm';

const Contact: React.FC = () => {
  const classes = useStyles();

  const animateClass =
    'animate__animated animate__zoomIn animate__slow';

  return (
    <div className={classes.homeRoot}>
      <div className={`${animateClass} ${classes.homeInner}`}>
        <ContactForm title={'Contact me'}></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
