import {PaylineBaseResponse} from "./payline-base-response.js";
import {PaylineCardOut} from "../payline-card-out.js";
import {PaylineExtendedCardType} from "../payline-extended-card-type.js";

class PaylineUpdateWalletResponse extends PaylineBaseResponse {
  public card: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public contractNumberWalletList?: any;
}

export {PaylineUpdateWalletResponse};
