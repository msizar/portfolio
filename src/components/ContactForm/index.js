import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, TextField } from '@material-ui/core';
import Dividers from '../Divider';

import styles from './styles';
import Buttons from '../Button';

const ContactForm = (props) => {
  const {
    title, handleChange, description, handleSubmit, error,
  } = props;
  const classes = styles();
  return (
    <Paper className={classes.root}>
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
      <Typography
        data-aos="fade-up"
        data-aos-offset={90}
        data-aos-delay={47}
        data-aos-duration={1000}
        data-aos-anchor-placement="top-bottom"
        className={classes.subTitle}
        color="textSecondary"
      >
        {description}
      </Typography>

      <form
        data-aos="fade-up"
        data-aos-offset={90}
        data-aos-delay={47}
        data-aos-duration={1000}
        data-aos-anchor-placement="top-bottom"
        onSubmit={handleSubmit}

      >

        <TextField
          id="standard-name"
          label="Name"
          name="name"
          className={classes.textField}
          onChange={(event) => handleChange(event, 'name')}
          fullWidth
          required
          type="name"
        />
        <TextField
          id="standard-name"
          label="Email"
          name="email"
          className={classes.textField}
          onChange={(event) => handleChange(event, 'email')}
          fullWidth
          type="email"
          required
        />
        <TextField
          id="standard-name"
          label="Message"
          name="message"
          className={classes.textField}
          onChange={(event) => handleChange(event, 'message')}
          fullWidth
          required
        />
        <div
          className={classes.submitBtn}
        >
          <Buttons type="submit" handleClick={() => {}}>Submit</Buttons>
        </div>

      </form>

      <small>{error || ''}</small>
    </Paper>
  );
};

ContactForm.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

ContactForm.defaultProps = {
  error: '',
};
export default ContactForm;
