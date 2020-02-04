import React, { Component } from 'react';

import { CONTACT_ME } from '../../assets/constants/experience';
import LoadingCircle from '../../components/LoadingCircle';
import SuccessState from '../../components/SuccessState';
import ContactForm from '../../components/ContactForm';
import mailProvider from '../../providers/mail';


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {},
      response: null,
      error: null,
      loading: false,
    };
  }


  submit = async (event) => {
    const { values } = this.state;
    event.preventDefault();

    const url = '/api/email';
    this.setState({ loading: true });
    mailProvider.sendMail({
      url, payload: values, handleError: this.handleError, handleResponse: this.handleResponse,
    });
    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: this.encode({ 'form-name': 'contact', ...values }),
    // })
    //   .then((response) => this.handleResponse(response))
    //   .catch((error) => this.handleError(error));
  }


  handleError = (error) => {
    this.setState({ error: error.message, loading: false });
  };

  handleResponse = (response) => {
    if (response && response.status >= 200) {
      this.setState({ response, loading: false });
    } else {
      const errorMsg = response && response.data;
      this.setState({ error: errorMsg.response || 'Mail was not sent successfully Please try again' });
    }
  };

  onChange = (event, name) => {
    const { values } = this.state;

    this.setState({
      values: { ...values, [name]: event.target.value },
    });
  }

   encode = (data) => Object.keys(data)
     .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
     .join('&');


   render() {
     const { response, error, loading } = this.state;
     return (
       <div>
         {loading ? <LoadingCircle />
           : (
             <div>
               { response && !error
                 ? <SuccessState status={response} />
                 : (
                   <ContactForm
                     title="Contact Me"
                     error={error}
                     description={CONTACT_ME.description}
                     handleSubmit={this.submit}
                     handleChange={this.onChange}
                   />
                 )}
             </div>
           )}

       </div>
     );
   }
}

export default Contact;
