import {Payline} from "../payline";
import {PaylineGetTransactionDetailsResponse} from "../../models/responses";
import {PaylineGetTransactionDetailsRequest} from "../../models/requests";

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
