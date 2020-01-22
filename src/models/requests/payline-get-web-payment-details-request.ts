import {PaylineBaseRequest} from "./payline-base-request";

 class PaylineGetWebPaymentDetailsRequest extends PaylineBaseRequest {
  public token: string;

  constructor(token: string) {
    super();
    this.token = token;
  }
}

export {PaylineGetWebPaymentDetailsRequest};
