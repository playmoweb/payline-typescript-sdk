import {Payline} from "../payline.js";
import {PaylineGetTransactionDetailsResponse} from "../../models/responses/index.js";
import {PaylineGetTransactionDetailsRequest} from "../../models/requests/index.js";

/**
 * Manage payline status request
 */
class PaylineStatusRequest {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Get a transaction from a transactionId
   */
  public getTransactionDetailsRequest(request: PaylineGetTransactionDetailsRequest): Promise<PaylineGetTransactionDetailsResponse> {
    return this.payline.execAndCatch("getTransactionDetails", request);
  }

}

export {PaylineStatusRequest};
