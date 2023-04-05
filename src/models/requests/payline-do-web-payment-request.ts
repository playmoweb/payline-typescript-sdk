import {PaylineMode} from "../payline-mode.js";
import {PaylineCurrency} from "../payline-currency.js";
import {PaylineDeliveryMode} from "../payline-delivery-mode.js";
import {PaylineBaseRequest} from "./payline-base-request.js";
import {PaylineOrder} from "../payline-order.js";
import {PaylineBuyer} from "../payline-buyer.js";
import {PaylineOwner} from "../payline-owner.js";
import {PaylineThreeDSInfo} from "../payline-three-ds-info.js";
import {PaylineUtils} from "../../services/payline-utils.js";
import {PaylineAction} from "../payline-action.js";
import {PaylinePayment} from "../payline-payment.js";
import {PaylineOrderDetail} from "../payline-order-detail.js";
import {PaylineChallengeInd} from "../payline-challenge-ind.js";

class PaylineDoWebPaymentRequest extends PaylineBaseRequest {
  public payment: PaylinePayment;
  public returnURL: string;
  public cancelURL: string;
  public order: PaylineOrder;
  public notificationURL?: string;
  public selectedContractList?: { selectedContract: string }[];
  public secondSelectedContractList?: { selectedContract: string }[];
  public privateDataList?: { privateData: {key: string, value: string}[] } = { privateData: [] }; // metadata
  public languageCode?: string;
  public customPaymentPageCode?: string;
  public buyer: PaylineBuyer;
  public owner?: PaylineOwner;
  public securityMode?: string;
  public recurring?: any;
  public customPaymentTemplateURL: string;
  public contractNumberWalletList?: any;
  public merchantName?: string;
  public subMerchant?: {};
  public miscData?: string;
  public asynchronousRetryTimeout?: string;
  public threeDSInfo?: PaylineThreeDSInfo;
  public merchantScore?: string;

  constructor(orderRef: string) {
    super();
    this.buyer = new PaylineBuyer();
    this.payment = new PaylinePayment();
    this.order = new PaylineOrder();
    this.order.ref = orderRef;
    this.order.date = PaylineUtils.getPaylineNowDateFormat();
    this.threeDSInfo = new PaylineThreeDSInfo();
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
      if (!this.selectedContractList || this.selectedContractList.length === 0) {
        this.selectedContractList = [{selectedContract: contractNumber}];
      }
    }
    return this;
  }

  public setSelectedContracts(contractsNumber: string[]): this {
    this.selectedContractList = (contractsNumber || []).map(selectedContract => ({selectedContract}));
    return this;
  }

  public setSecondSelectedContracts(contractsNumber: string[]): this {
    this.secondSelectedContractList = (contractsNumber || []).map(selectedContract => ({selectedContract}));
    return this;
  }

  public setCallbackUrls(returnURL: string, cancelURL: string, notificationURL: string = null): this {
    this.returnURL = returnURL;
    this.cancelURL = cancelURL;
    this.notificationURL = notificationURL;
    return this;
  }

  public setAmount(amount: number, currency: PaylineCurrency): this {
    this.payment.amount = amount;
    this.payment.currency = currency;
    this.order.amount = amount;
    this.order.currency = currency;
    return this;
  }

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
    return this;
  }

  public setWalletId(walletId: string): this {
    this.buyer.walletId = walletId;
    return this;
  }

  public setPaymentDetails(action: PaylineAction, mode: PaylineMode, differedActionDate?: string): this {
    this.payment.action = action.code;
    this.payment.mode = mode;
    if (differedActionDate) {
      this.payment.differedActionDate = differedActionDate;
    }
    return this;
  }

  public setOrderDetails(deliveryMode: PaylineDeliveryMode, country: string = "fr", details: PaylineOrderDetail[] = null): this {
    this.order.deliveryMode = deliveryMode.code;
    this.order.country = country;
    this.order.details = details;
    return this;
  }

  public setMerchantName(merchantName: string): this {
    this.merchantName = merchantName;
    return this;
  }

  public setThreeDSInfo(challengeInd: PaylineChallengeInd): this {
    this.threeDSInfo.challengeInd = challengeInd.code;
    return this;
  }

  public setPrivateDataList(privateDataList: { privateData: {key: string, value: string}[] } ): this {
    this.privateDataList = privateDataList;
    return this;
  }

  public setCustomPageCode(code: string): this {
    this.customPaymentPageCode = code;
    return this;
  }
}

export {PaylineDoWebPaymentRequest};
