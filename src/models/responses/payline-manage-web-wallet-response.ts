import PaylineResultResponse from "./payline-result-response";

export default class PaylineManageWebWalletResponse {
  public result: PaylineResultResponse;
  public token: string;
  public redirectURL: string;
}
