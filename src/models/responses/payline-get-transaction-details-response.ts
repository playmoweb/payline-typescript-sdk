import {PaylineBaseResponse} from "./payline-base-response.js";
import {PaylineResultResponse} from "./payline-result-response.js";
import {PaylineTransaction} from "../payline-transaction.js";
import {PaylinePayment} from "../payline-payment.js";
import {PaylineAuthorization} from "../payline-authorization.js";
import {PaylineAuthentication3DS} from "../payline-authentication-3ds.js";
import {PaylineCardOut} from "../payline-card-out.js";
import {PaylineExtendedCardType} from "../payline-extended-card-type.js";
import {PaylineOrder} from "../payline-order.js";
import {PaylineBuyer} from "../payline-buyer.js";

class PaylineGetTransactionDetailsResponse extends PaylineBaseResponse {
  public result: PaylineResultResponse;
  public transaction: PaylineTransaction;
  public payment: PaylinePayment;
  public authorization: PaylineAuthorization;
  public order?: PaylineOrder;
  public buyer?: PaylineBuyer;
  public privateDataList?: { [key: string]: string }; // metadata
  public card: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public associatedTransactionsList?: any;
  public statusHistoryList?: any;
  public media?: string;
  public customerMedia: any;
  public contractNumber: string;
  public paymentAdditionalList?: any;
  public bankAccountData?: any;
  public subMerchant?: {};
  public authentication3DSecure?: PaylineAuthentication3DS;
  public pointOfSell?: any;
  public routingRule?: any;
}

export {PaylineGetTransactionDetailsResponse};
