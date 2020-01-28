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
  public doRefundRequest(request: PaylineDoRefundRequest): Promise<PaylineDoRefundResponse> {
    return this.payline.execAndCatch("doRefundRequest", request);
  }

}

export {PaylinePaymentManagement};
