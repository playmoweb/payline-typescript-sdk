import PaylineResultResponse from "./payline-result-response";

export default class PaylineCreateWebWalletResponse {
  public result: PaylineResultResponse;
  public token: string;
  public redirectURL: string;
}
