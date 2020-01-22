class PaylineDeliveryMode {
  public readonly code: number;
  public readonly description: string;
  public readonly forTransaction3DSv2: boolean = false;
  public readonly restCode: string;


  constructor(code: number, description: string, forTransaction3DSv2: boolean, restCode: string) {
    this.code = code;
    this.description = description;
    this.forTransaction3DSv2 = forTransaction3DSv2;
    this.restCode = restCode;
  }

  public static readonly ClickAndCollect = new PaylineDeliveryMode(1, "Collect goods from the merchant", false, "CLICKANDCOLLECT");
  public static readonly PickupPoint = new PaylineDeliveryMode(2, "Use a network of third-party pick-up points (such as Kiala, Alveol, etc.)", false, "PICKUP_POINT");
  public static readonly Travel = new PaylineDeliveryMode(3, "Collect from an airport, a train station or a travel agent", false, "");
  public static readonly Mail = new PaylineDeliveryMode(4, "Mail (Colissimo, UPS, DHL, etc., or any private courier)", false, "MAIL");
  public static readonly DigitalGoods = new PaylineDeliveryMode(5, "Issuing an electronic ticket, downloads", false, "DIGITAL_GOOD");
  public static readonly BillegAddress = new PaylineDeliveryMode(6, "Ship to cardholder’s billing address", true, "BILLING_ADDRESS");
  public static readonly VerifiedAddress = new PaylineDeliveryMode(7, "Ship to another verified address on file with merchant", true, "VERIFIED_ADDRESS");
  public static readonly NotBillingAddress = new PaylineDeliveryMode(8, "Ship to address that is different than the cardholder’s billing address", true, "NOT_BILLING_ADDRESS");
  public static readonly TravelAndEventTickets = new PaylineDeliveryMode(9, "Travel and Event tickets, not shipped", true, "");
  public static readonly Locker = new PaylineDeliveryMode(10, "Locker delivery (or other automated pick-up)", true, "LOCKER");
  public static readonly Other = new PaylineDeliveryMode(999, "Other", true, "OTHER");

}

export {PaylineDeliveryMode};
