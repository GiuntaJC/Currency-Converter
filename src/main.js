import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyConverter from'./js/converter.js';

$("#currencyForm").submit((event) => {
  const inputtedAmount = $("#dollarAmount").val();
  const targetCurrency = $("#currencySelect").val();

  let promise = currencyConverter.getCurrencyInfoFromApi();
  promise.then((response) => {
    const parsedResponse = JSON.parse(response);
    if(parsedResponse.result == "error"){
      $("#errorResponse").text(`Error caught: ${parsedResponse["error-type"]}`);
    } else if(parsedResponse.result == "success"){
      const result = inputtedAmount * parsedResponse["conversion_rates"][targetCurrency];
      console.log(result);
      $("#response").text(`${inputtedAmount} USD is equal to ${result} ${targetCurrency}`);
    } else {
      $("#errorResponse").text("API did not respond");
    }
  }, function(err) {
    $("#errorResponse").text(`Error caught: ${err}`);
  });

  
  
  event.preventDefault();
});