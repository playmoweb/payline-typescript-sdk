import {PaylineTransaction} from "../payline-transaction.js";
import {PaylineAuthorization} from "../payline-authorization.js";
import {PaylineBaseResponse} from "./payline-base-response.js";

class PaylineDoImmediateWalletPaymentResponse extends PaylineBaseResponse {
  public transaction: PaylineTransaction;
  public authorization: PaylineAuthorization;
}

export {PaylineDoImmediateWalletPaymentResponse};
