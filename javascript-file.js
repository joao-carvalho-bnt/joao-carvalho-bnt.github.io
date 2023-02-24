// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the Translate button and input field
    const submitBtn = document.querySelector('#content button');
    const inputField = document.querySelector('#content input[type="text"]');
  
    // Add a click event listener to the Translate button
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      console.log(inputField.value);
    });
  
  });