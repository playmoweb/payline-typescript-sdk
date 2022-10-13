import {Payline} from "../payline.js";
import {PaylineDoAuthorizationRequest} from "../../models/requests/index.js";
import {PaylineDoAuthorizationResponse} from "../../models/responses/index.js";

/**
 * Payline direct payments Service
 */
class PaylineDirectPayment {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Execute a refund (can be partial)
   */
  public doAuthorization(request: PaylineDoAuthorizationRequest): Promise<PaylineDoAuthorizationResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doAuthorization", request);
  }

}

export {PaylineDirectPayment};
