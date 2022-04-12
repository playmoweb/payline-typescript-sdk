import {PaylineBaseRequest} from "./payline-base-request.js";
import {PaylinePayment} from "../payline-payment.js";
import {PaylineCurrency} from "../payline-currency.js";
import {PaylineOrderDetail} from "../payline-order-detail.js";
import {PaylineAction} from "../payline-action.js";
import {PaylineMode} from "../payline-mode.js";

class PaylineDoRefundRequest extends PaylineBaseRequest {
  public transactionID: string;
  public payment: PaylinePayment;
  public comment?: string;
  public sequenceNumber?: string;
  public privateDataList?: { [key: string]: string }; // metadata
  public media?: string;
  public details?: PaylineOrderDetail;

  constructor(transactionId: string, payment: PaylinePayment = null) {
    super();
    this.transactionID = transactionId;
    this.payment = payment ? payment : new PaylinePayment();
    this.payment.action = PaylineAction.Refund.code;
    this.payment.mode = PaylineMode.FULL;
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
    }
    return this;
  }

  public setPaymentAmount(amount: number, currency: PaylineCurrency): this {
    this.payment.amount = amount;
    this.payment.currency = currency;
    return this;
  }

  public setComment(comment: string): this {
    this.comment = comment;
    return this;
  }

  public setDetails(details: PaylineOrderDetail): this {
    this.details = details;
    return this;
  }
}

export {PaylineDoRefundRequest};
