import PaylineResultResponse from "./payline-result-response";
import PaylineTransaction from "../payline-transaction";
import PaylineAuthorization from "../payline-authorization";

export default class PaylineDoImmediateWalletPaymentResponse {
  public result: PaylineResultResponse;
  public transaction: PaylineTransaction;
  public authorization: PaylineAuthorization;
}
