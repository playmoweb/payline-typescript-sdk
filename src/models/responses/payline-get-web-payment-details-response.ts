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
import {PaylineWallet} from "../payline-wallet.js";

class PaylineGetWebPaymentDetailsResponse extends PaylineBaseResponse {
  public contractNumber: string;
  public result: PaylineResultResponse;
  public transaction: PaylineTransaction;
  public payment: PaylinePayment;
  public authorization: PaylineAuthorization;

  public privateDataList?: { [key: string]: string }; // metadata
  public paymentRecordId?: string;
  public billingRecordList?: any;
  public authentication3DSecure?: PaylineAuthentication3DS;
  public cardOut: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public order?: PaylineOrder;
  public paymentAdditionalList?: any;
  public media?: string;
  public numberOfAttempt?: string;
  public wallet?: PaylineWallet;
  public contractNumberWalletList?: any;
  public bankAccountData?: any;
  public subMerchant?: {};
  public buyer?: PaylineBuyer;
}

export {PaylineGetWebPaymentDetailsResponse};
