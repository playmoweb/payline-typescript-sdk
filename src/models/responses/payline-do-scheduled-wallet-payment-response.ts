import PaylineResultResponse from "./payline-result-response";
import PaylineTransaction from "../payline-transaction";
import PaylineAuthorization from "../payline-authorization";

export default class PaylineDoScheduledWalletPaymentResponse {
  public result: PaylineResultResponse;
  public paymentRecordId: string;
}
