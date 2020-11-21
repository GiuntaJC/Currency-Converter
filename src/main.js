import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Class from'./js/converter.js';
Class
$("#currencyForm").submit((event) => {
  console.log("foobar");
  event.preventDefault();
});