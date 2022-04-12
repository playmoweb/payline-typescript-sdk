import {PaylineCardOut} from "../payline-card-out.js";
import {PaylineExtendedCardType} from "../payline-extended-card-type.js";
import {PaylineBaseResponse} from "./payline-base-response.js";

class PaylineCreateWalletResponse extends PaylineBaseResponse {
  public card: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public contractNumberWalletList?: any;
  public fraudResultDetails?: any;
}

export {PaylineCreateWalletResponse};
