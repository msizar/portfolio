import axios from 'axios';
import { AKBAB_STARWARS_ALL_USERS } from '../constants';

export class aboutProvider {
  static async getEmployees() {
    try {
      const { data, error } = await axios.get(AKBAB_STARWARS_ALL_USERS);

      // check if we have data and no error then resolve promise with result
      if (data && !error) {
        return {
          error: null,
          ok: true,
          result: data,
        };
      }

      return {
        ok: false,
        result: null,
        error: new Error(error),
      };
    } catch (e) {
      return {
        ok: false,
        result: null,
        error: new Error(e),
      };
    }
  }
}
