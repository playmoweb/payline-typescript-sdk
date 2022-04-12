import {PaylinePaymentData} from "./payline-payment-data.js";

enum PaylineCardType {
  CB = "CB",
  VISA = "VISA",
  MASTERCARD = "MASTERCARD",
  MAESTRO = "MAESTRO",
  AMEX = "AMEX"
}

class PaylineCard {
  public encryptionKeyId?: string;
  public encryptedData?: string;
  public number?: string;
  public type: PaylineCardType;
  public expirationDate?: string;
  public cvx?: string;
  public ownerBirthdayDate?: string;
  public password?: string;
  public cardPresent?: string;
  public cardholder?: string;
  public token?: string;
  public paymentData?: PaylinePaymentData;
}

export {PaylineCard, PaylineCardType};
