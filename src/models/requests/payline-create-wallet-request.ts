import {PaylineBaseRequest} from "./payline-base-request.js";
import {PaylineBuyer} from "../payline-buyer.js";
import {PaylineOwner} from "../payline-owner.js";
import {PaylineAuthentication3DS} from "../payline-authentication-3ds.js";
import {PaylineCard} from "../payline-card.js";
import {PaylineWallet} from "../payline-wallet.js";

class PaylineCreateWalletRequest extends PaylineBaseRequest {
  public contractNumber: string;
  public wallet: Partial<PaylineWallet>;
  public buyer?: PaylineBuyer;
  public owner?: PaylineOwner;

  public privateDataList?: { [key: string]: string }; // metadata
  public authentication3DSecure?: PaylineAuthentication3DS = {};
  public media?: string;
  public contractNumberWalletList?: any;

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

export {PaylineCreateWalletRequest};
