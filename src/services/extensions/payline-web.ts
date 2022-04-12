import {PaylineCreateWebWalletRequest, PaylineDoWebPaymentRequest, PaylineGetWebPaymentDetailsRequest, PaylineManageWebWalletRequest} from "../../models/requests/index.js";
import {PaylineCreateWebWalletResponse, PaylineDoWebPaymentResponse, PaylineGetWebPaymentDetailsResponse, PaylineManageWebWalletResponse} from "../../models/responses/index.js";
import {Payline} from "../payline.js";

class PaylineWeb {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Get web payment details
   */
  public getWebPaymentDetails(request: PaylineGetWebPaymentDetailsRequest): Promise<PaylineGetWebPaymentDetailsResponse> {
    return this.payline.execAndCatch("getWebPaymentDetails", request);
  }

  /**
   * Get web payment details
   */
  public doWebPayment(request: PaylineDoWebPaymentRequest): Promise<PaylineDoWebPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doWebPayment", request);
  }

  /**
   * Create web wallet
   */
  public createWebWallet(request: PaylineCreateWebWalletRequest): Promise<PaylineCreateWebWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("createWebWallet", request);
  }

  /**
   * Manage a web wallet
   */
  public manageWebWallet(request: PaylineManageWebWalletRequest): Promise<PaylineManageWebWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("manageWebWallet", request);
  }

}

export {PaylineWeb};
