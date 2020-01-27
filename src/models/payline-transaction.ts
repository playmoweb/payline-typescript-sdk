import {PaylinePayment} from "./payline-payment";

class PaylineTransaction {
  public id: string;
  public date: string;
  public isDuplicated?: string;
  public isPossibleFraud?: string;
  public fraudResult?: string;
  public fraudResultDetails?: any;
  public explanation?: string;
  public threeDSecure?: string; // Y / N
  public softDescriptor?: string;
  public score?: any;
  public externalWalletType?: string;
  public externalWalletContractNumber?: string;
  public partnerAdditionalData?: string;
  public avs?: any;
  public customerId?: string;
  public type: string;
  public orderReference?: string;
  public payment?: PaylinePayment;
  public pointOfSell?: any;
  public card?: any;
  public extendedCard?: any;
}

export {PaylineTransaction};
