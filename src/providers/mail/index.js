import axios from 'axios';

export default class mailProvider {
  static async sendMail({
    url, payload, handleError, handleResponse,
  }) {
    try {
      const response = await axios.post(url, payload);
      handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  }
}
