// Handle donation form submission
document.getElementById('donation-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    const donationAmount = document.getElementById('donation-amount').value;
    const donationCategory = document.getElementById('donation-category').value;

    if (donationAmount > 0) {
        // Store donation data in sessionStorage
        sessionStorage.setItem('donationAmount', donationAmount);
        sessionStorage.setItem('donationCategory', donationCategory);

        // Show thank you message for donation
        document.getElementById('thank-you-message').style.display = 'block';
        document.getElementById('thank-you-message').textContent = `Thank you for your donation of $${donationAmount}! We appreciate your generosity.`;

        // Redirect to overview page after donation
        window.location.href = "overview.html"; // Ensure this matches the path of overview.html
    } else {
        alert('Please enter a valid donation amount');
    }
});
