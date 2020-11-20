import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './js/converter.js';

$("#currencyForm").submit((event) => {
  console.log("foobar");
  event.preventDefault();
});