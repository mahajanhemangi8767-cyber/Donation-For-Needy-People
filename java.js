document.addEventListener("DOMContentLoaded", function() {
    // Sample data for the donation overview
    const donationRequests = [
        { id: 1, name: "Food for Orphans", amountNeeded: 500 },
        { id: 2, name: "Medical Supplies", amountNeeded: 300 },
        { id: 3, name: "School Supplies", amountNeeded: 200 }
    ];

    const donors = [
        { username: "testuser", amountDonated: 50 },
        { username: "donor123", amountDonated: 100 },
        { username: "generous_guy", amountDonated: 200 }
    ];

    const summary = {
        totalDonated: 350,
        totalRequests: 3
    };

    // Populate donation requests
    const requestList = document.getElementById("request-list");
    donationRequests.forEach(request => {
        const listItem = document.createElement("li");
        listItem.textContent = `${request.name} - $${request.amountNeeded} needed`;
        requestList.appendChild(listItem);
    });

    // Populate donor details
    const donorList = document.getElementById("donor-list");
    donors.forEach(donor => {
        const listItem = document.createElement("li");
        listItem.textContent = `${donor.username} donated $${donor.amountDonated}`;
        donorList.appendChild(listItem);
    });

    // Populate overall summary
    const summaryDiv = document.getElementById("summary");
    summaryDiv.innerHTML = `
        <p>Total Donated: $${summary.totalDonated}</p>
        <p>Total Donation Requests: ${summary.totalRequests}</p>
    `;
});
