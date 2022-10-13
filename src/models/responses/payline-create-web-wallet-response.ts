import {PaylineBaseResponse} from "./payline-base-response.js";

class PaylineCreateWebWalletResponse extends PaylineBaseResponse {
  public token: string;
  public redirectURL: string;
}

export {PaylineCreateWebWalletResponse};
