// Sample data for overall donations and needy people
let donationRequests = [
    { instituteName: "Institute A", item: "Books", quantity: 50 },
    { instituteName: "Institute B", item: "Clothes", quantity: 30 }
];

let donorDetails = [
    { donorName: "John Doe", donationType: "money", amount: 500 },
    { donorName: "Jane Smith", donationType: "item", item: "Books", quantity: 50 }
];

// Function to update overall summary
function updateSummary() {
    const totalRequests = donationRequests.length;
    const totalDonations = donorDetails.filter(donor => donor.donationType === 'money').length;
    const totalNeedyPeople = donationRequests.reduce((acc, request) => acc + parseInt(request.quantity), 0);

    document.getElementById('total-donations-requested').innerText = totalRequests;
    document.getElementById('total-donations-made').innerText = totalDonations;
    document.getElementById('needy-people-count').innerText = totalNeedyPeople;
}

// Call the updateSummary function on page load
updateSummary();
