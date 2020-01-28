import {PaylineBaseResponse} from "./payline-base-response";
import {PaylineTransaction} from "../payline-transaction";

class PaylineDoRefundResponse extends PaylineBaseResponse {
  public transaction: PaylineTransaction;
}

export {PaylineDoRefundResponse};
