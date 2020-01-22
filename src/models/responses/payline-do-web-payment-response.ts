import PaylineResultResponse from "./payline-result-response";

export default class PaylineDoWebPaymentResponse {
  public result: PaylineResultResponse;
  public token: string;
  public redirectURL: string;
  public stepCode?: string;
  public reqCode?: string;
  public method?: string;
}
