console.log(`Welcome to tutorial 20`);

// Local Storage
//--------------------------------
let array = ['adrak', 'pyaz', 'bhindi'];

/* Add a key value pair inside local storage*/
localStorage.setItem('Name', 'Mihir');
localStorage.setItem('Name2', 'Sachin');
localStorage.setItem('Sabzi', JSON.stringify(array));

/* Clear the entire local storage */
// localStorage.clear();

/* Clear a particuler key-value pair */
localStorage.removeItem('Name2');

/* Retrieve an item from the local Storage */
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

// Session Storage
//-------------------------------------

sessionStorage.setItem('sessionName', 'sMihir');
sessionStorage.setItem('sessionName2', 'sSachin');
sessionStorage.setItem('sessionSabzi', JSON.stringify(array));
