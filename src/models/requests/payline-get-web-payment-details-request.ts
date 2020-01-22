import PaylineBaseRequest from "./payline-base-request";

export default class PaylineGetWebPaymentDetailsRequest extends PaylineBaseRequest{
  public token: string;

  constructor(token: string) {
    super();
    this.token = token;
  }
}
