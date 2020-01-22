import {PaylineCardOut} from "../payline-card-out";
import {PaylineExtendedCardType} from "../payline-extended-card-type";
import {PaylineBaseResponse} from "./payline-base-response";

class PaylineCreateWalletResponse extends PaylineBaseResponse {
  public card: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public contractNumberWalletList?: any;
  public fraudResultDetails?: any;
}

export {PaylineCreateWalletResponse};
