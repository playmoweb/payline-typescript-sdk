import {PaylineMode} from "../payline-mode";
import PaylineAction from "../payline-action";
import {PaylineCurrency} from "../payline-currency";
import PaylineBuyer from "../payline-buyer";
import PaylinePayment from "../payline-payment";
import PaylineOrder from "../payline-order";
import PaylineUtils from "../../services/payline-utils";
import {PaylineDeliveryMode} from "../payline-delivery-mode";
import PaylineBaseRequest from "./payline-base-request";
import PaylineOwner from "../payline-owner";
import PaylineThreeDSInfo from "../payline-three-ds-info";

export default class PaylineDoWebPaymentRequest extends PaylineBaseRequest {
  public payment: PaylinePayment;
  public returnURL: string;
  public cancelURL: string;
  public order: PaylineOrder;
  public notificationURL?: string;
  public selectedContractList?: [{ selectedContract: string }];
  public secondSelectedContractList?: [{ selectedContract: string }];
  public privateDataList?: { [key: string]: string } = {}; // metadata
  public languageCode?: string;
  public customPaymentPageCode?: string;
  public buyer: PaylineBuyer;
  public owner?: PaylineOwner;
  public securityMode?: string;
  public reccuring?: any;
  public customPaymentTemplateURL: string;
  public contractNumberWalletList?: any;
  public merchantName?: string;
  public subMerchant?: {};
  public miscData?: string;
  public asynchronousRetryTimeout?: string;
  public threeDSInfo?: PaylineThreeDSInfo;
  public merchantScore?: string;

  constructor(orderRef: string) {
    super();
    this.buyer = new PaylineBuyer();
    this.payment = new PaylinePayment();
    this.order = new PaylineOrder();
    this.order.ref = orderRef;
    this.order.date = PaylineUtils.getPaylineNowDateFormat();
  }

  public changeContractNumber(contractNumber: string): this {
    this.payment.contractNumber = contractNumber;
    this.selectedContractList = [{selectedContract: contractNumber}];
    return this;
  }

  public setCallbackUrls(returnURL: string, cancelURL: string, notificationURL: string = null): this {
    this.returnURL = returnURL;
    this.cancelURL = cancelURL;
    this.notificationURL = notificationURL;
    return this;
  }

  public setCurrency(currency: PaylineCurrency): this {
    this.payment.currency = currency;
    this.order.currency = currency;
    return this;
  }

  public setAmount(amount: number): this {
    this.payment.amount = amount;
    this.order.amount = amount;
    return this;
  }

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
    return this;
  }

  public setWalletId(walletId: string): this {
    this.buyer.walletId = walletId;
    return this;
  }

  public setPaymentDetails(action: PaylineAction, mode: PaylineMode, differedActionDate?: string): this {
    this.payment.action = action.code;
    this.payment.mode = mode;
    if (differedActionDate) {
      this.payment.differedActionDate = differedActionDate;
    }
    return this;
  }

  public setOrderDetails(deliveryMode: PaylineDeliveryMode, country: string = "fr", details: any = {}): this {
    this.order.deliveryMode = deliveryMode.code;
    this.order.country = country;
    this.order.details = details;
    return this;
  }
}
