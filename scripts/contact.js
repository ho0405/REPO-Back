// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// get the submit button and contact page elements



var submitButton = document.getElementById('submit-Button');
var contactpage = document.getElementById('contact-page');

submitButton.addEventListener('click', function() {
    contactpage.innerHTML = '<p style="font-size:24px;">Thank you for your message</p>';
});

