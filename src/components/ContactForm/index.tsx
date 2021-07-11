import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';
import Buttons from '../Buttons';
import { Title } from '../Typography';

type ContactFormProps = {
  title: string;
  description?: String;
  handleSubmit?: any;
  handleChange?: any;
};

const ContactForm: FC<ContactFormProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.contactRoot}>
      <Title>{title}</Title>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="form-name" value="contact" />
        <TextField
          id="outlined-full-width"
          label="Fullname"
          name="name"
          placeholder="Enter Fullname"
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.textField}
          inputProps={{
            classes: {
              color: 'red',
            },
          }}
        />

        <TextField
          id="outlined-full-width"
          label="Email"
          type="email"
          name="email"
          placeholder="example@google.com"
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.textField}
          inputProps={{
            classes: {
              color: 'red',
            },
          }}
        />

        <TextField
          id="outlined-full-width"
          label="Message"
          placeholder="Enter message"
          type="string"
          name="message"
          required
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.textField}
          inputProps={{
            classes: {
              color: 'red',
            },
          }}
        />

        <div className={classes.submitBtn}>
          <Buttons variant="contained" type="submit">
            Submit
          </Buttons>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
