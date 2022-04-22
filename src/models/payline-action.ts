class PaylineAction {
  public readonly code: number;
  public readonly restCode: string;

  constructor(code: number, restCode: string) {
    this.code = code;
    this.restCode = restCode;
  }

  // most used
  public static readonly SimpleAuth = new PaylineAction(100, "AUTH"); // validation
  public static readonly AuthCapture = new PaylineAction(101, "AUTH_CAPTURE"); // validation + payment
  public static readonly Capture = new PaylineAction(201, "CAPTURE"); // payment

  public static readonly AccountVerification = new PaylineAction(108, "ACCOUNT_VERIF");
  public static readonly PermitTokenPan = new PaylineAction(109, "TOKEN_PAN");
  public static readonly AuthRecurringFirst = new PaylineAction(110, "AUTH_COF_FIRST");
  public static readonly AuthCaptureRecurringFirst = new PaylineAction(111, "AUTH_CAPTURE_COF_FIRST");
  public static readonly AuthNoCVX = new PaylineAction(120, "AUTH_WITHOUT_CVX");
  public static readonly AuthCaptureNoCVX = new PaylineAction(121, "AUTH_CAP_WITHOUT_CVX");
  public static readonly AuthRecurring = new PaylineAction(122, "AUTH_COF");
  public static readonly AuthCaptureRecurring = new PaylineAction(123, "AUTH_CAPTURE_COF");
  public static readonly AuthInstallPayment = new PaylineAction(124, "AUTH_NX");
  public static readonly AuthCaptureInstallPayment = new PaylineAction(125, "AUTH_CAPTURE_NX");
  public static readonly AuthSplitShipment = new PaylineAction(126, "AUTHOR_SPLIT_SHIPMENT");
  public static readonly AuthCaptureSplitShipment = new PaylineAction(127, "AUTHOR_CAPTURE_SPLIT_SHIPMENT");
  public static readonly AuthOtherRecurring = new PaylineAction(128, "AUTHOR_OTHER_COF");
  public static readonly AuthCaptureOther = new PaylineAction(129, "AUTHOR_CAPTURE_OTHER_COF");
  public static readonly AuthRental = new PaylineAction(130, "AUTHORIZATION_RENTAL");
  public static readonly AuthCaptureRentalDelayed = new PaylineAction(132, "AUTHORIZATION_CAPTURE_RENTAL_DELAYED");
  public static readonly AuthCaptureNoShow = new PaylineAction(133, "AUTHORIZATION_CAPTURE_NO_SHOW");
  public static readonly AccountVerifSharePayment = new PaylineAction(148, "ACCOUNT_VERIF_SHARE_PAYMENT");
  public static readonly SEPACreditTransfert = new PaylineAction(150, "SCT");
  public static readonly ReAuthorization = new PaylineAction(202, "REAUTHORIZATION");
  public static readonly LastCapture = new PaylineAction(203, "LAST_CAPTURE");
  public static readonly Debit = new PaylineAction(204, "DEBIT");
  public static readonly Refund = new PaylineAction(421, "REFUND");
  public static readonly Credit = new PaylineAction(422, "CREDIT");
}

export {PaylineAction};
