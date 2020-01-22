import cryptoRandomString from "crypto-random-string";
import {Payline} from "../payline";
import {PaylineUpdateWalletRequest} from "../../models/requests/payline-update-wallet-request";
import {PaylineUpdateWalletResponse} from "../../models/responses/payline-update-wallet-response";
import {PaylineUtils} from "../payline-utils";
import {PaylineCreateWalletRequest} from "../../models/requests/payline-create-wallet-request";
import {PaylineCreateWalletResponse} from "../../models/responses/payline-create-wallet-response";
import {PaylineDoImmediateWalletPaymentRequest} from "../../models/requests/payline-do-immediate-wallet-payment-request";
import {PaylineDoImmediateWalletPaymentResponse} from "../../models/responses/payline-do-immediate-wallet-payment-response";
import {PaylineDoScheduledWalletPaymentRequest} from "../../models/requests/payline-do-scheduled-wallet-payment-request";
import {PaylineDoScheduledWalletPaymentResponse} from "../../models/responses/payline-do-scheduled-wallet-payment-response";

/**
 * Manage payline wallets
 */
class PaylineWalletManagement {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Update an existing wallet
   */
  public updateWallet(request: PaylineUpdateWalletRequest): Promise<PaylineUpdateWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "updateWallet", request));
  }

  /**
   * Create a new wallet
   */
  public createWallet(request: PaylineCreateWalletRequest): Promise<PaylineCreateWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "createWallet", request));
  }

  /**
   * Do immediate wallet payment
   */
  public doImmediateWalletPayment(request: PaylineDoImmediateWalletPaymentRequest): Promise<PaylineDoImmediateWalletPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "doImmediateWalletPayment", request));
  }

  /**
   * Do schedule wallet payment
   */
  public doScheduledWalletPayment(request: PaylineDoScheduledWalletPaymentRequest): Promise<PaylineDoScheduledWalletPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    request.order.ref = request.order.ref + cryptoRandomString({length: 16, type: "base64"});
    return this.payline.getClient()
      .then(client => PaylineUtils.execAndCatch(client, "doScheduledWalletPayment", request));
  }

}

export {PaylineWalletManagement};
