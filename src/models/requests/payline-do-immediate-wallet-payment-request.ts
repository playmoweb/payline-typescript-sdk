import {PaylineMode} from "../payline-mode";
import {PaylineCurrency} from "../payline-currency";
import {PaylineDeliveryMode} from "../payline-delivery-mode";
import {PaylineAuthentication3DS} from "../payline-authentication-3ds";
import {PaylineBaseRequest} from "./payline-base-request";
import {PaylineAction} from "../payline-action";
import {PaylineBuyer} from "../payline-buyer";
import {PaylineOrder} from "../payline-order";
import {PaylineUtils} from "../../services/payline-utils";
import {PaylinePayment} from "../payline-payment";

class PaylineDoImmediateWalletPaymentRequest extends PaylineBaseRequest {
  public walletId: string;
  public buyer: PaylineBuyer;
  public payment: PaylinePayment;

  // extras
  public privateDataList?: { [key: string]: string }; // metadata
  public authentication3DSecure?: PaylineAuthentication3DS = {};
  public subMerchant?: {};

  public order: PaylineOrder;

  constructor(walletId: string) {
    super();
    this.walletId = walletId;

    this.buyer = new PaylineBuyer();
    this.buyer.walletId = walletId;

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

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
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

export {PaylineDoImmediateWalletPaymentRequest};
