import {PaylineAddress} from "./payline-address.js";

class PaylineOwner {
  public lastName?: string;
  public firstName?: string;
  public billingAddress?: PaylineAddress;
  public issueCardDate?: string;
}

export {PaylineOwner};
