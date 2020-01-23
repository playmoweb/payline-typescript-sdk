import {
  PaylineGetWebPaymentDetailsRequest,
  PaylineCreateWebWalletRequest,
  PaylineManageWebWalletRequest,
  PaylineDoWebPaymentRequest
} from "../../models/requests";
import {
  PaylineGetWebPaymentDetailsResponse,
  PaylineDoWebPaymentResponse,
  PaylineManageWebWalletResponse,
  PaylineCreateWebWalletResponse

} from "../../models/responses";
import {Payline} from "../payline";
import {PaylineUtils} from "../payline-utils";

class PaylineWeb {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Get web payment details
   */
  public getWebPaymentDetails(request: PaylineGetWebPaymentDetailsRequest): Promise<PaylineGetWebPaymentDetailsResponse> {
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "getWebPaymentDetails", request));
  }

  /**
   * Get web payment details
   */
  public doWebPayment(request: PaylineDoWebPaymentRequest): Promise<PaylineDoWebPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "doWebPayment", request));
  }

  /**
   * Create web wallet
   */
  public createWebWallet(request: PaylineCreateWebWalletRequest): Promise<PaylineCreateWebWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "createWebWallet", request));
  }

  /**
   * Manage a web wallet
   */
  public manageWebWallet(request: PaylineManageWebWalletRequest): Promise<PaylineManageWebWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "manageWebWallet", request));
  }

}

export {PaylineWeb};
