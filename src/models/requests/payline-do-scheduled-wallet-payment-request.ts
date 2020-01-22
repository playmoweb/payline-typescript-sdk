import {PaylineMode} from "../payline-mode";
import PaylineAction from "../payline-action";
import {PaylineCurrency} from "../payline-currency";
import PaylineBuyer from "../payline-buyer";
import PaylinePayment from "../payline-payment";
import PaylineOrder from "../payline-order";
import PaylineUtils from "../../services/payline-utils";
import {PaylineDeliveryMode} from "../payline-delivery-mode";
import PaylineAuthentication3DS from "../payline-authentication-3ds";
import PaylineBaseRequest from "./payline-base-request";

export default class PaylineDoScheduledWalletPaymentRequest extends PaylineBaseRequest {
  public payment: PaylinePayment;
  public orderRef?: string;
  public orderDate?: string;
  public scheduledDate: string;
  public walletId: string;
  public cardInd?: string;
  public order?: PaylineOrder;

  // extras
  public privateDataList?: { [key: string]: string }; // metadata
  public media?: string;
  public subMerchant?: {};

  constructor(walletId: string) {
    super();
    this.walletId = walletId;
    this.payment = new PaylinePayment();
    this.order = new PaylineOrder();
    this.order.ref = walletId;
    this.order.date = PaylineUtils.getPaylineNowDateFormat();
  }

  public changeContractNumber(contractNumber: string): this {
    this.payment.contractNumber = contractNumber;
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

  public setPaymentDetails(action: PaylineAction, mode: PaylineMode, differedActionDate?: string): this {
    this.payment.action = action.code;
    this.payment.mode = mode;
    if (differedActionDate) {
      this.payment.differedActionDate = differedActionDate;
    }
    return this;
  }

  public setOrderDetails(deliveryMode: PaylineDeliveryMode, country: string, details: any = {}): this {
    this.order.deliveryMode = deliveryMode.code;
    this.order.country = country;
    this.order.details = details;
    return this;
  }
}
