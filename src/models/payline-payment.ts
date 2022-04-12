import {PaylineCurrency} from "./payline-currency.js";

class PaylinePayment {
  public action: number;
  public mode: string;
  public contractNumber: string;
  public currency: PaylineCurrency;
  public amount?: string | number;
  public differedActionDate?: string;
  public method?: string;
  public softDescriptor?: string;
  public cardBrand?: string;
  public registrationToken?: string;
  public cumulatedAmount?: string;
}

export {PaylinePayment};
