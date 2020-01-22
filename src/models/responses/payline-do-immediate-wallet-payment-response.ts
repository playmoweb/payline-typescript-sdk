import {PaylineTransaction} from "../payline-transaction";
import {PaylineAuthorization} from "../payline-authorization";
import {PaylineBaseResponse} from "./payline-base-response";

class PaylineDoImmediateWalletPaymentResponse extends PaylineBaseResponse {
  public transaction: PaylineTransaction;
  public authorization: PaylineAuthorization;
}

export {PaylineDoImmediateWalletPaymentResponse};
