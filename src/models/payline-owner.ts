import PaylineAddress from "./payline-address";

export default class PaylineOwner {
  public lastName?: string;
  public firstName?: string;
  public billingAddress?: PaylineAddress;
  public issueCardDate?: string;
}
