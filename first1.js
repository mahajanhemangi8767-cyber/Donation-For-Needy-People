// Arrays to store donation requests and donor details
let donationRequests = [];
let donorDetails = [];

// Handling the submission of the donation request form
document.getElementById('donationRequestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values from the form fields
  const instituteName = document.getElementById('instituteName').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;

  // Store the donation request in the array
  donationRequests.push({
    instituteName: instituteName,
    item: item,
    quantity: quantity
  });

  // Log the request and alert the user
  console.log(`Donation Request: ${instituteName} requests ${quantity} of ${item}`);
  alert('Donation request submitted successfully!');
});

// Handling the submission of the donor form
document.getElementById('donorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values from the form fields
  const donorName = document.getElementById('donorName').value;
  const donationType = document.getElementById('donationType').value;
  const amount = document.getElementById('donationAmount').value;
  const item = document.getElementById('donorItem').value;
  const quantity = document.getElementById('donorQuantity').value;

  // Store the donor details in the array
  donorDetails.push({
    donorName: donorName,
    donationType: donationType,
    amount: amount,
    item: item,
    quantity: quantity
  });

  // Process the donation based on donation type and log
  if (donationType === 'money') {
    console.log(`${donorName} donated $${amount}`);
    alert(`${donorName} donated $${amount}`);
  } else if (donationType === 'item') {
    console.log(`${donorName} donated ${quantity} of ${item}`);
    alert(`${donorName} donated ${quantity} of ${item}`);
  }
});

// Handling the submission of feedback form (optional)
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const feedback = document.getElementById('feedback').value;
  console.log(`Feedback: ${feedback}`);
  alert('Feedback submitted successfully!');
});
