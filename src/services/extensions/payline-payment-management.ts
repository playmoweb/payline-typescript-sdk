import {Payline} from "../payline.js";
import {PaylineDoRefundRequest} from "../../models/requests/index.js";
import {PaylineDoRefundResponse} from "../../models/responses/index.js";

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
