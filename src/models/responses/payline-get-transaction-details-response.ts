import {PaylineBaseResponse} from "./payline-base-response";
import {PaylineResultResponse} from "./payline-result-response";
import {PaylineTransaction} from "../payline-transaction";
import {PaylinePayment} from "../payline-payment";
import {PaylineAuthorization} from "../payline-authorization";
import {PaylineAuthentication3DS} from "../payline-authentication-3ds";
import {PaylineCardOut} from "../payline-card-out";
import {PaylineExtendedCardType} from "../payline-extended-card-type";
import {PaylineOrder} from "../payline-order";
import {PaylineBuyer} from "../payline-buyer";

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
