import PaylineBuyer from "../payline-buyer";
import PaylineOwner from "../payline-owner";
import PaylineBaseRequest from "./payline-base-request";

export default class PaylineManageWebWalletRequest extends PaylineBaseRequest {
  public contractNumber: string;
  public selectedContractList?: string[];
  public updatePersonalDetails?: string;
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

  constructor(buyer: PaylineBuyer, returnURL: string, cancelUrl: string) {
    super();
    this.buyer = buyer;
  }

  public changeContractNumber(contractNumber: string): this {
    this.contractNumber = contractNumber;
    return this;
  }

}
