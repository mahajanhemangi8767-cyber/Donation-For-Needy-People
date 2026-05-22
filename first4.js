const validUsername = "testuser";
const validPassword = "password123";

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('donation-container').classList.remove('hidden');
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

document.getElementById('donation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const donationAmount = document.getElementById('donation-amount').value;

    if (donationAmount > 0) {
        document.getElementById('thank-you-message').style.display = 'block';
        document.getElementById('thank-you-message').textContent = `Thank you for your donation of $${donationAmount}! We appreciate your generosity.`;

        // Redirect to overview page after donation
        window.location.href = "overview.html"; // Change to the correct path if necessary
    } else {
        alert('Please enter a valid donation amount');
    }
});
