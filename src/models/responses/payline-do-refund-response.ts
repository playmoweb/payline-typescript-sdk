import {PaylineBaseResponse} from "./payline-base-response.js";
import {PaylineTransaction} from "../payline-transaction.js";

class PaylineDoRefundResponse extends PaylineBaseResponse {
  public transaction: PaylineTransaction;
}

export {PaylineDoRefundResponse};
