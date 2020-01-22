import {PaylineBaseResponse} from "./payline-base-response";

class PaylineManageWebWalletResponse extends PaylineBaseResponse {
  public token: string;
  public redirectURL: string;
}

export {PaylineManageWebWalletResponse};
