import {PaylineCurrency} from "./payline-currency";

class PaylinePayment {
  public amount?: string | number;
  public currency: PaylineCurrency;
  public action: number;
  public mode: string;
  public contractNumber: string;
  public differedActionDate?: string;
  public method?: string;
  public softDescriptor?: string;
  public cardBrand?: string;
  public registrationToken?: string;
  public cumulatedAmount?: string;
}

export {PaylinePayment};
