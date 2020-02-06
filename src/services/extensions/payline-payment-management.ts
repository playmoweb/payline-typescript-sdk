import {Payline} from "../payline";
import {PaylineDoRefundRequest} from "../../models/requests";
import {PaylineDoRefundResponse} from "../../models/responses";

/**
 * Manage payline payments
 */
class PaylinePaymentManagement {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Execute a refund (can be partial)
   */
  public doRefund(request: PaylineDoRefundRequest): Promise<PaylineDoRefundResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doRefund", request);
  }



}

export {PaylinePaymentManagement};
