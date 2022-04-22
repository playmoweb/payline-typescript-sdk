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

  public static readonly Withdrawal = new PaylineDeliveryMode(1, "Collect goods from the merchant", false, "WITHDRAWAL");
  public static readonly Relay = new PaylineDeliveryMode(2, "Use a network of third-party pick-up points (such as Kiala, Alveol, etc.)", false, "RELAY");
  public static readonly Airport = new PaylineDeliveryMode(3, "Collect from an airport, a train station or a travel agent", false, "AIRPORT");
  public static readonly Transport = new PaylineDeliveryMode(4, "Mail (Colissimo, UPS, DHL, etc., or any private courier)", false, "TRANSPORT");
  public static readonly Virtual = new PaylineDeliveryMode(5, "Issuing an electronic ticket, downloads", false, "VIRTUAL");
  public static readonly BillingAddress = new PaylineDeliveryMode(6, "Ship to cardholder’s billing address", true, "BILLING_ADDRESS");
  public static readonly VerifiedAddress = new PaylineDeliveryMode(7, "Ship to another verified address on file with merchant", true, "VERIFIED_ADDRESS");
  public static readonly NotBillingAddress = new PaylineDeliveryMode(8, "Ship to address that is different than the cardholder’s billing address", true, "NOT_BILLING_ADDRESS");
  public static readonly NotShipped = new PaylineDeliveryMode(9, "Travel and Event tickets, not shipped", true, "NOT_SHIPPED");
  public static readonly Locker = new PaylineDeliveryMode(10, "Locker delivery (or other automated pick-up)", true, "LOCKER");
  public static readonly Other = new PaylineDeliveryMode(999, "Other", true, "OTHER");

}

export {PaylineDeliveryMode};
