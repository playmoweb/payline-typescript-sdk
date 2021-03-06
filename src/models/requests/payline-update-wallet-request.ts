import {PaylineBaseRequest} from "./payline-base-request";
import {PaylineBuyer} from "../payline-buyer";
import {PaylineOwner} from "../payline-owner";
import {PaylineAuthentication3DS} from "../payline-authentication-3ds";
import {PaylineCard} from "../payline-card";
import {PaylineWallet} from "../payline-wallet";

class PaylineUpdateWalletRequest extends PaylineBaseRequest {
  public contractNumber: string;
  public wallet: Partial<PaylineWallet>;
  public buyer?: PaylineBuyer;
  public owner?: PaylineOwner;

  public privateDataList?: { [key: string]: string }; // metadata
  public authentication3DSecure?: PaylineAuthentication3DS = {};
  public media?: string;
  public contractNumberWalletList?: any;

  public cardInd?: string;

  constructor(card: PaylineCard) {
    super();
    this.wallet = new PaylineWallet();
    this.wallet.card = card;
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.contractNumber || force) {
      this.contractNumber = contractNumber;
    }
    return this;
  }
}

export {PaylineUpdateWalletRequest};
