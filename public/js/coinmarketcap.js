// CoinMarketCap
// https://sandbox.coinmarketcap.com/api/v1/

const rp = require("request-promise");
const requestOptions = {
  method  : "GET",
  uri     : "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs      : {
    start   : "1",
    limit   : "5000",
    convert : "USD"
  },
  headers : {
    "X-CMC_PRO_API_KEY" : "f2402813-8608-4197-858a-8f42c42fe9a8"
  },
  json    : true,
  gzip    : true
};

rp(requestOptions)
  .then((response) => {
    console.log("API call response:", response);
  })
  .catch((err) => {
    console.log("API call error:", err.message);
  });
