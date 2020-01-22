import {PaylineBaseResponse} from "./payline-base-response";

class PaylineCreateWebWalletResponse extends PaylineBaseResponse {
  public token: string;
  public redirectURL: string;
}

export {PaylineCreateWebWalletResponse};
