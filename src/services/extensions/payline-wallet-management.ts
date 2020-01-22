import PaylineUtils from "../payline-utils";
import Payline from "../payline";
import PaylineUpdateWalletResponse from "../../models/responses/payline-update-wallet-response";
import PaylineCreateWalletResponse from "../../models/responses/payline-create-wallet-response";
import PaylineDoImmediateWalletPaymentResponse from "../../models/responses/payline-do-immediate-wallet-payment-response";
import PaylineDoScheduledWalletPaymentResponse from "../../models/responses/payline-do-scheduled-wallet-payment-response";
import PaylineUpdateWalletRequest from "../../models/requests/payline-update-wallet-request";
import PaylineCreateWalletRequest from "../../models/requests/payline-create-wallet-request";
import PaylineDoImmediateWalletPaymentRequest from "../../models/requests/payline-do-immediate-wallet-payment-request";
import PaylineDoScheduledWalletPaymentRequest from "../../models/requests/payline-do-scheduled-wallet-payment-request";
import cryptoRandomString from "crypto-random-string";

/**
 * Manage payline wallets
 */
export default class PaylineWalletManagement {
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
