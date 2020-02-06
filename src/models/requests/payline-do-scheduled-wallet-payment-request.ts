import {PaylineMode} from "../payline-mode";
import {PaylineCurrency} from "../payline-currency";
import {PaylineDeliveryMode} from "../payline-delivery-mode";
import {PaylineOrder} from "../payline-order";
import {PaylineBaseRequest} from "./payline-base-request";
import {PaylineUtils} from "../../services/payline-utils";
import {PaylineAction} from "../payline-action";
import {PaylinePayment} from "../payline-payment";

class PaylineDoScheduledWalletPaymentRequest extends PaylineBaseRequest {
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

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
    }
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

export {PaylineDoScheduledWalletPaymentRequest};
