export default class currencyConverter{
  constructor(usd, currencyType) {
    this.usd = usd;
    this.currencyType = currencyType;
    this.convertedAmount = 0;
  }

  static getCurrencyInfoFromApi() {
    return new Promise((resolve,reject) => {
      const request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function() {
        if(this.status == 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

