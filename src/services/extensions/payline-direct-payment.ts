import {Payline} from "../payline";
import {PaylineDoAuthorizationRequest} from "../../models/requests";
import {PaylineDoAuthorizationResponse} from "../../models/responses";

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
