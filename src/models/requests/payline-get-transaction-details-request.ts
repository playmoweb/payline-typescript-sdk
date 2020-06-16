import {PaylineBaseRequest} from "./payline-base-request";

class PaylineGetTransactionDetailsRequest extends PaylineBaseRequest {
  public transactionId: string;

  constructor(transactionId: string) {
    super();
    this.transactionId = transactionId;
  }
}

export {PaylineGetTransactionDetailsRequest};
