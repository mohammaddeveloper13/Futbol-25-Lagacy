(function() {
    emailjs.init('fzmYEFhTY7RvyhbHw'); // Your Public Key
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    emailjs.sendForm('service_aimda11', 'template_gedujqu', this) // Use your Service ID and Template ID
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});
