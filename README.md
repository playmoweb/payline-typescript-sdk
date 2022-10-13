# Payline SDK 

*This is an unofficial repository*

## Installation

```shell script
npm i --save @playmoweb/payline-typescript-sdk
```

## Basic usage

```typescript
import {
  Payline,
  PaylineWeb,
  PaylineDoWebPaymentRequest,
  PaylineCurrency,
  PaylineAction,
  PaylineDeliveryMode,
  PaylineMode,
} from "payline-typescript-sdk";

// prepare payline configuration
const isProduction = false;
const isDebug = true;
const paylineConfig = new Payline("YOUR_MERCHANT_ID", "YOUR_KEY_SECRET", "YOUR_CONTRACT_NUMBER", {}, isProduction, isDebug);
const paylineWebService = new PaylineWeb(paylineConfig);

// Create a request to do a web payment
const doWebPaymentRequest = new PaylineDoWebPaymentRequest("YOUR_ORDER_REFERENCE_ID")
    .setClientDetails("client-email@example.com", "First name", "Last name")
    .setCallbackUrls("https://www.your.website.com/returnUrl", "https://www.your.website.com/cancelUrl", "https://your.server.com/hook/payline")
    .setAmount(1000, PaylineCurrency.EUR)
    .setPaymentDetails(PaylineAction.AuthCapture, PaylineMode.FULL)
    .setOrderDetails(PaylineDeliveryMode.Virtual)
    .setWalletId("CUSTOMER_WALLET_ID"); // if needed, attach a walletId

// Execute the payment (will return a promise)
paylineWebService.doWebPayment(doWebPaymentRequest);
```

```typescript
import {PaylineWalletManagement} from "payline-typescript-sdk";

// if you need wallet endpoints you need to instantiate the service with the payline config instance
const paylineWalletService = new PaylineWalletManagement(paylineConfig);
```

## Development

Tested endpoints :

```
// PaylineWeb
doWebPayment()
getWebPaymentDetails()
manageWebWallet()

// PaylineWalletManagement


// PaylinePaymentManagement
doRefundRequest()
```

