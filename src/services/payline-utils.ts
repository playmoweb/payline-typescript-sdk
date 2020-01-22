import soap from "soap";
import * as moment from "moment-timezone";

/**
 * Payline helpers
 */
class PaylineUtils {
  public static timezone = "Europe/Paris";

  /**
   * Return the payline date format for this date
   */
  public static getPaylineDateFormat(value: moment.Moment) {
    return value.format("DD/MM/YYYY HH:mm");
  }

  /**
   * Return the payline date format for this date
   */
  public static getPaylineNowDateFormat() {
    return this.getPaylineDateFormat(moment.tz(PaylineUtils.timezone));
  }

  /**
   * Check result for success
   */
  public static isSuccessful(response): boolean {
    return response.result && ["02500", "00000"].indexOf(response.result.code) !== -1;
  }

  /**
   * Check errors
   */
  public static parseErrors(error): Promise<any> {
    if (!error.response) {
      return Promise.reject(error);
    }

    const response = error.response;
    if (response.statusCode === 401) {
      return Promise.reject({shortMessage: "Payline: Not authorized"});
    }

    return Promise.reject({shortMessage: "Payline: Unknown error"});
  }

  /**
   * Execute a soap method using a client and a payload.
   */
  public static execAndCatch<T>(client: soap.Client, method: string, payload: any): Promise<T> {
    return new Promise((resolve, reject) => {
      client[method](payload, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    })
      .then((response: T) => {
        if (!PaylineUtils.isSuccessful(response)) {
          if (response["result"]) {
            return Promise.reject(response["result"]);
          }
          return Promise.reject({shortMessage: "Payline: Invalid response code"});
        }
        return response;
      })
      .catch(err => PaylineUtils.parseErrors(err));
  }
}

export {PaylineUtils};
