class PaylineOrder {
  public ref: string;
  public origin?: string;
  public country?: string;
  public taxes?: string;
  public amount: string | number;
  public currency: string | number;
  public date: string;
  public details?: any;
  public deliveryTime?: string;
  public deliveryMode?: number;
  public deliveryExpectedDate?: string;
  public deliveryExpectedDelay?: string;
  public deliveryCharge?: string;
  public discountAmount?: string;
  public otaPackageType?: string;
  public otaDestinationCountry?: string;
  public bookingReference?: string;
  public orderDetail?: string;
  public orderExtended?: string;
  public orderOTA?: string;
}

export {PaylineOrder};
