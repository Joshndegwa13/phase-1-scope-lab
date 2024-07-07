// Write your solution in this file!
// Task 1: customerName
var customerName = 'bob';

// Task 2: upperCaseCustomerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Task 3: setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Task 4: overwriteBestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Task 5: leastFavoriteCustomer and changeLeastFavoriteCustomer
const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will throw an error
}
