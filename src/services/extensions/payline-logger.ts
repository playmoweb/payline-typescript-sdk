export interface PaylineLogger {
  log(...data: any): void;
}

/**
 * Default console logger
 */
export default class ConsolePaylineLogger implements PaylineLogger {
  private debugMode: boolean;

  constructor(debugMode: boolean) {
    this.debugMode = debugMode;
  }

  /**
   * Log data if enabled
   */
  public log(...data: any): void {
    if (this.debugMode) {
      console.dir(data, {showHidden: true, colors: true});
    }
  }
}
