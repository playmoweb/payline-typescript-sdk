class PaylineResultResponse {
  public code: string;
  public shortMessage?: string;
  public longMessage?: string;
  public partnerCode?: string;
  public partnerCodeLabel?: string;

  constructor(code: string) {
    this.code = code;
  }
}

export {PaylineResultResponse};
