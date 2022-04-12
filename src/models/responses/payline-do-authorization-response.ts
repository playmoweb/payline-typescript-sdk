import {PaylineBaseResponse} from "./payline-base-response.js";
import {PaylineTransaction} from "../payline-transaction.js";
import {PaylineAuthorization} from "../payline-authorization.js";
import {PaylineCardOut} from "../payline-card-out.js";
import {PaylineExtendedCardType} from "../payline-extended-card-type.js";

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
