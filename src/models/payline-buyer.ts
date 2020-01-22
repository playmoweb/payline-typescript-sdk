import PaylineAddress from "./payline-address";

export default class PaylineBuyer {
  public title?: string;
  public lastName?: string;
  public firstName?: string;
  public email?: string;
  public shippingAddress?: PaylineAddress;
  public billingAddress?: PaylineAddress;
  public accountCreateDate?: string;
  public accountAverageAmount?: string;
  public accountOrderCount?: string;
  public walletId?: string;
  public walletDisplayed?: string;
  public walletSecured?: string;
  public walletCardInd?: string;
  public ip?: string;
  public mobilePhone?: string;
  public customerId?: string;
  public legalStatus?: string;
  public legalDocument?: string;
  public birthDate?: string;
  public fingerprintID?: string;
  public deviceFingerprint?: string;
  public isBot?: string;
  public isIncognito?: string;
  public isBehindProxy?: string;
  public isFromTor?: string;
  public isEmulator?: string;
  public isRooted?: string;
  public hasTimezoneMismatch?: string;
  public loyaltyMemberType?: string;
  public buyerExtended?: string;
  public merchantAuthentication?: any;
}
