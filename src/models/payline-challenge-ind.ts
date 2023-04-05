class PaylineChallengeInd {
  public readonly code: string;
  public readonly description: string;
  public readonly restCode: string;

  constructor(code: string, description: string, restCode: string) {
    this.code = code;
    this.description = description;
    this.restCode = restCode;
  }

  public static readonly NoPreference = new PaylineChallengeInd(
    "01",
    "No preference (default value)",
    "NO_PREFERENCE"
  );
  public static readonly NoChallenge = new PaylineChallengeInd(
    "02",
    "No challenge requested",
    "NO_CHALLENGE"
  );
  public static readonly Challenge = new PaylineChallengeInd(
    "03",
    "Challenge requested: 3DS Requestor Preference",
    "CHALLENGE"
  );
  public static readonly ChallengeAsMandate = new PaylineChallengeInd(
    "04",
    "Challenge requested: Mandate",
    "CHALLENGE_AS_MANDATE"
  );
  public static readonly NoChallengeAsExemption = new PaylineChallengeInd(
    "05",
    `No challenge requested (transactional risk analysis is already performed).
    To be used for Acquirer exemptions (low-value payment, TRA).`,
    "NO_CHALLENGE_AS_EXEMPTION"
  );
  public static readonly CBScoring = new PaylineChallengeInd(
    "90",
    "Asking for CB Scoring",
    "CB_SCORING"
  );
}

export { PaylineChallengeInd };
