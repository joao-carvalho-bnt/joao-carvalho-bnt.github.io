// Get form elements
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('button');

// Add event listener to login button
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate input
    if (email === '' || password === '') {
        alert('Please enter email and password');
    } else {
        // Log in user (this is where you would send a request to a server)
        alert(`Logged in as ${email}`);
    }
});

// Add event listener to sentence input
const sentenceInput = document.querySelector('.sentence-input');
sentenceInput.addEventListener('input', function(event) {
    // Get input value
    const sentence = sentenceInput.value;

    // Modify background image based on sentence length
    const backgroundImage = document.body.style.backgroundImage;
    const length = sentence.length;
    if (length < 10) {
        document.body.style.backgroundImage = backgroundImage.replace('justice-theme-image', 'background1');
    } else if (length < 20) {
        document.body.style.backgroundImage = backgroundImage.replace('justice-theme-image', 'background2');
    } else {
        document.body.style.backgroundImage = backgroundImage.replace('justice-theme-image', 'background3');
    }
});
