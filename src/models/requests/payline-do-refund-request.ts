import {PaylineBaseRequest} from "./payline-base-request";
import {PaylinePayment} from "../payline-payment";
import {PaylineOrderDetail} from "../../../dist/models";
import {PaylineCurrency} from "../payline-currency";

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
