import {PaylineBaseResponse} from "./payline-base-response.js";

class PaylineDoWebPaymentResponse extends PaylineBaseResponse {
  public token: string;
  public redirectURL: string;
  public stepCode?: string;
  public reqCode?: string;
  public method?: string;
}

export {PaylineDoWebPaymentResponse};
