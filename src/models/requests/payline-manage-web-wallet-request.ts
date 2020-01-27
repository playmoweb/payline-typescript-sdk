import {PaylineBuyer} from "../payline-buyer";
import {PaylineOwner} from "../payline-owner";
import {PaylineBaseRequest} from "./payline-base-request";

class PaylineManageWebWalletRequest extends PaylineBaseRequest {
  public contractNumber: string;
  public selectedContractList?: { selectedContract: string }[];
  public updatePersonalDetails?: string = "0";
  public buyer: PaylineBuyer;
  public owner?: PaylineOwner;
  public languageCode?: string;
  public customPaymentPageCode?: string;
  public securityMode?: string;
  public returnURL: string;
  public cancelURL: string;
  public notificationURL?: string;
  public privateDataList?: { [key: string]: string }; // metadata
  public customPaymentTemplateURL: string;
  public contractNumberWalletList?: any;
  public merchantName?: string;
  public threeDSInfo?: any;

  constructor(walletId: string) {
    super();
    this.buyer = new PaylineBuyer();
    this.buyer.walletId = walletId;
  }

  public changeContractNumber(contractNumber: string): this {
    this.contractNumber = contractNumber;
    if (!this.selectedContractList || this.selectedContractList.length === 0) {
      this.selectedContractList = [{selectedContract: contractNumber}];
    }
    return this;
  }

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
    return this;
  }

  public setCallbackUrls(returnURL: string, cancelURL: string, notificationURL: string = null): this {
    this.returnURL = returnURL;
    this.cancelURL = cancelURL;
    this.notificationURL = notificationURL;
    return this;
  }

  public allowPersonalDetailsUpdate(allow: boolean): this {
    this.updatePersonalDetails = allow ? "1" : "0";
    return this;
  }

  public setSelectedContracts(contractsNumber: string[]): this {
    this.selectedContractList = (contractsNumber || []).map(selectedContract => ({selectedContract}));
    return this;
  }

  public setCustomPageCode(code: string): this {
    this.customPaymentPageCode = code;
    return this;
  }
}

export {PaylineManageWebWalletRequest};
