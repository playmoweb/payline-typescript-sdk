import {PaylineBaseRequest} from "./payline-base-request";
import {PaylinePayment} from "../payline-payment";
import {PaylineCurrency} from "../payline-currency";
import {PaylineAction} from "../payline-action";
import {PaylineMode} from "../payline-mode";
import {PaylineCard, PaylineCardType} from "../payline-card";
import {PaylineOrder} from "../payline-order";
import {PaylineBuyer} from "../payline-buyer";
import {PaylineOwner} from "../payline-owner";
import {PaylineAuthentication3DS} from "../payline-authentication-3ds";
import {PaylineBankAccountData} from "../payline-bank-account-data";
import {PaylineSubMerchant} from "../payline-sub-merchant";
import {PaylineDeliveryMode} from "../payline-delivery-mode";
import {PaylineOrderDetail} from "../payline-order-detail";
import {PaylinePaymentData} from "../payline-payment-data";

class PaylineDoAuthorizationRequest extends PaylineBaseRequest {
  public transient?: string;
  public payment: PaylinePayment;
  public bankAccountData: PaylineBankAccountData;
  public card: PaylineCard;
  public order: PaylineOrder;
  public buyer?: PaylineBuyer;
  public owner?: PaylineOwner;
  public privateDataList?: { [key: string]: string }; // metadata
  public authentication3DSecure?: PaylineAuthentication3DS;
  public media?: string;
  public subMerchant?: PaylineSubMerchant;
  public asynchronousRetryTimeout: string;
  public linkedTransactionId: string;
  public recurring?: string;

  constructor(payment: PaylinePayment = null) {
    super();
    this.payment = payment ? payment : new PaylinePayment();
    this.payment.action = PaylineAction.AuthCapture.code;
    this.payment.mode = PaylineMode.FULL;

    this.bankAccountData = new PaylineBankAccountData();
    this.card = new PaylineCard();
    this.order = new PaylineOrder();
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
    }
    return this;
  }

  public setOrderDetails(deliveryMode: PaylineDeliveryMode, country: string = "fr", details: PaylineOrderDetail[] = null): this {
    this.order.deliveryMode = deliveryMode.code;
    this.order.country = country;
    this.order.details = details;
    return this;
  }

  public setAmount(amount: number, currency: PaylineCurrency): this {
    this.payment.amount = amount;
    this.payment.currency = currency;
    this.order.amount = amount;
    this.order.currency = currency;
    return this;
  }

  public setWalletId(walletId: string): this {
    if (!this.buyer) {
      this.buyer = new PaylineBuyer();
    }
    this.buyer.walletId = walletId;
    return this;
  }

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    if (!this.buyer) {
      this.buyer = new PaylineBuyer();
    }

    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
    return this;
  }

  public setCardData(type: PaylineCardType, paymentData: PaylinePaymentData): this {
    this.card.type = type;
    this.card.paymentData = paymentData;
    return this;
  }
}

export {PaylineDoAuthorizationRequest};
