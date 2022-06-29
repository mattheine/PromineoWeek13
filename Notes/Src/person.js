//import to use the $ method
import $ from 'jquery';
//export the file
export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  display(elementId) {//changes inner HTML to that of the person
    $(`#${elementId}`).text(`${this.firstName} ${this.lastName}`);
  }
}
