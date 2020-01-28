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
  public score?: string;
  public scoring?: any;
  public externalWalletType?: string;
  public externalWalletContractNumber?: string;
  public partnerAdditionalData?: string;
  public avs?: any;
}

export {PaylineTransaction};
