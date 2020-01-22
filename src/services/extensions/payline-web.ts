import {PaylineGetWebPaymentDetailsRequest} from "../../models/requests/payline-get-web-payment-details-request";
import {PaylineGetWebPaymentDetailsResponse} from "../../models/responses/payline-get-web-payment-details-response";
import {PaylineCreateWebWalletRequest} from "../../models/requests/payline-create-web-wallet-request";
import {PaylineCreateWebWalletResponse} from "../../models/responses/payline-create-web-wallet-response";
import {PaylineManageWebWalletResponse} from "../../models/responses/payline-manage-web-wallet-response";
import {PaylineManageWebWalletRequest} from "../../models/requests/payline-manage-web-wallet-request";
import {PaylineDoWebPaymentRequest} from "../../models/requests/payline-do-web-payment-request";
import {Payline} from "../payline";
import {PaylineDoWebPaymentResponse} from "../../models/responses/payline-do-web-payment-response";
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
