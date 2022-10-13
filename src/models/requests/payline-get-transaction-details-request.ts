import {PaylineBaseRequest} from "./payline-base-request.js";

class PaylineGetTransactionDetailsRequest extends PaylineBaseRequest {
  public transactionId: string;

  constructor(transactionId: string) {
    super();
    this.transactionId = transactionId;
  }
}

export {PaylineGetTransactionDetailsRequest};
