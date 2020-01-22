import PaylineResultResponse from "./payline-result-response";
import PaylineCardOut from "../payline-card-out";
import PaylineExtendedCardType from "../payline-extended-card-type";

export default class PaylineCreateWalletResponse {
  public result: PaylineResultResponse;
  public card: PaylineCardOut;
  public extendedCard: PaylineExtendedCardType;
  public contractNumberWalletList?: any;
  public fraudResultDetails?: any;
}
