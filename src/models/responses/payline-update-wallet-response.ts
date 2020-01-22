import {PaylineBaseResponse} from "./payline-base-response";
import {PaylineCardOut} from "../payline-card-out";
import {PaylineExtendedCardType} from "../payline-extended-card-type";

class PaylineUpdateWalletResponse extends PaylineBaseResponse {
  public card: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public contractNumberWalletList?: any;
}

export {PaylineUpdateWalletResponse};
