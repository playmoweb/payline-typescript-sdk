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
import {PaylineWallet} from "../payline-wallet";

class PaylineGetTransactionDetailsResponse extends PaylineBaseResponse {
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

export {PaylineGetTransactionDetailsResponse};
