import {PaylineCard} from "./payline-card";

class PaylineWallet {
  public card: PaylineCard;
  public lastName?: string;
  public firstName?: string;
  public email?: string;
  public shippingAddress?: any;
  public comment?: string;
  public default?: string;
  public cardStatus?: string;
  public cardBrand?: string;
}

export {PaylineWallet};
