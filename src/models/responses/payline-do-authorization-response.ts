import {PaylineBaseResponse} from "./payline-base-response";
import {PaylineTransaction} from "../payline-transaction";
import {PaylineAuthorization} from "../payline-authorization";
import {PaylineCardOut} from "../payline-card-out";
import {PaylineExtendedCardType} from "../payline-extended-card-type";

class PaylineDoAuthorizationResponse extends PaylineBaseResponse {
  public transaction: PaylineTransaction;
  public authorization: PaylineAuthorization;
  public card: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public privateDataList?: { [key: string]: string };
  public contractNumber: string;
  public linkedTransactionId?: string;
  public resultContainer?: string;
}

export {PaylineDoAuthorizationResponse};
