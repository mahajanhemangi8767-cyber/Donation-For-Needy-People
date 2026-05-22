// Handling the submission of the donation request form
document.getElementById('donationRequestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values from the form fields
  const instituteName = document.getElementById('instituteName').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;

  // Here you would typically send this data to your server
  console.log(`Donation Request: ${instituteName} requests ${quantity} of ${item}`);
  alert('Donation request submitted successfully!');
});

// Handling the submission of the donor form
document.getElementById('donorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values from the form fields
  const donorName = document.getElementById('donorName').value;
  const donationType = document.getElementById('donationType').value;
  const amount = document.getElementById('amount').value;
  const item = document.getElementById('donorItem').value;
  const quantity = document.getElementById('donorQuantity').value;

  // Process the donation based on donation type
  if (donationType === 'money') {
    console.log(`${donorName} donated $${amount}`);
    alert(`${donorName} donated $${amount}`);
  } else if (donationType === 'item') {
    console.log(`${donorName} donated ${quantity} of ${item}`);
    alert(`${donorName} donated ${quantity} of ${item}`);
  }
});
