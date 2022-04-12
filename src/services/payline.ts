import * as soap from "soap";
import {IOptions} from "soap/lib/types.js";
import * as path from "path";
import {fileURLToPath} from "url";
import {ConsolePaylineLogger, PaylineLogger} from "./extensions/payline-logger.js";
import {PaylineUtils} from "./payline-utils.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_HOMOLOGATION_WSDL = path.join(__dirname, "../config/wsdls/homologation/WebPaymentAPI.xml");
const DEFAULT_PRODUCTION_WSDL = path.join(__dirname, "../config/wsdls/production/WebPaymentAPI.xml");

/**
 * Payline service
 */
class Payline {
  private readonly merchantId: any;
  private readonly accessKey: any;
  private readonly contractNumber: any;
  private wsdl: string;
  private options: IOptions;
  private production: boolean = false;
  private debugMode: boolean = false;

  private logger: PaylineLogger;
  private clientInitialization: Promise<soap.Client>;

  constructor(merchantId: any, accessKey: any, contractNumber: any, options: IOptions = {}, production: boolean = false, debugMode: boolean = false) {
    this.merchantId = merchantId;
    this.accessKey = accessKey;
    this.contractNumber = contractNumber;
    this.options = options;
    this.production = production;
    this.debugMode = debugMode;
    this.logger = new ConsolePaylineLogger(debugMode);

    if (production) {
      this.wsdl = DEFAULT_PRODUCTION_WSDL;
    } else {
      this.wsdl = DEFAULT_HOMOLOGATION_WSDL;
    }
  }

  public setWsdl(wsdl: string): void {
    this.wsdl = wsdl;
  }

  public getContractNumber(): string {
    return this.contractNumber;
  }

  /**
   * Get the soap client with this configuration
   */
  public getClient(): Promise<soap.Client> {
    if (this.clientInitialization) {
      return this.clientInitialization;
    }

    this.clientInitialization = new Promise((resolve, reject) => {
      soap.createClient(this.wsdl, this.options, (err, client) => {
        if (err) {
          reject(err);
        } else {
          resolve(client);
        }
      });
    })
      .then((client: soap.Client) => {
        client.setSecurity(new soap.BasicAuthSecurity(this.merchantId, this.accessKey));
        client.on("request", (xml) => this.logger.log("request", xml));
        client.on("response", (xml) => this.logger.log("response", xml));
        return client;
      });

    return this.clientInitialization;
  }

  /**
   * Execute a soap method using a client and a payload.
   */
  public execAndCatch<T>(method: string, payload: any): Promise<T> {
    return this.getClient()
      .then(client => {
        return new Promise((resolve, reject) => {
          client[method](payload, (err, response: T) => err ? reject(err) : resolve(response));
        });
      })
      .then((response: T) => response)
      .catch(err => PaylineUtils.parseErrors(err));
  }
}

export {Payline};
