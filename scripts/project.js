const apiUrl = 'https://run.mocky.io/v3/4deb6f17-7f2d-4dbc-b1f1-fb9f37187e61';
const contactList = document.getElementById("contactList");

async function fetchContacts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function populateContactList(contacts) {
    contactList.innerHTML = "";
    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${contact.name}</strong><br>
            Email: ${contact.email}<br>
            Phone: ${contact.phone}<br>
            Address: ${contact.address}<br>
            State: ${contact.state} <br>
            Zip: ${contact.zip} <br>
            Physically Active: ${contact.PhysicallyActive}
        `;
        contactList.appendChild(li);
        
    });
}

function countByState(contacts) {
    const stateCounts = {};

    contacts.forEach(contact => {
        const state = contact.state;
        stateCounts[state] = (stateCounts[state] || 0) + 1;
    });

    return stateCounts;
}

// Function to display state-wise results
function displayStateCounts(stateCounts) {
    const stateCountsDiv = document.getElementById("stateCounts");
    stateCountsDiv.innerHTML = "";

    for (const state in stateCounts) {
        const count = stateCounts[state];
        const stateResult = document.createElement("div");
        stateResult.textContent = `${state}: ${count} people`;
        stateCountsDiv.appendChild(stateResult);
    }
}

// Event listener for the "Count by State" button
document.getElementById("countByStateButton").addEventListener("click", () => {
    fetchContacts().then(data => {
        const stateCounts = countByState(data);
        displayStateCounts(stateCounts);
    });
});

function updateResultCount(count) {
    document.getElementById("resultCount").textContent = `Results: ${count}`;
}

// Initially populate the list and result count when the page loads
fetchContacts().then(data => {
    populateContactList(data);
    updateResultCount(data.length);
});

function clearFilters() {
    // Clear the input fields and checkboxes
    document.getElementById("searchFirstName").value = '';
    document.getElementById("searchLastName").value = '';
    document.getElementById("searchZip").value = '';
    document.getElementById("searchState").value = '';
    document.getElementById("filterActive").checked = false;

    // Re-fetch and populate the list with all contacts
    fetchContacts().then(data => {
        populateContactList(data);
        updateResultCount(data.length);
    });

    // Clear the state-wise results
    const stateCountsDiv = document.getElementById("stateCounts");
    stateCountsDiv.innerHTML = '';
}

function filterContacts() {
    const searchFirstName = document.getElementById("searchFirstName").value.toLowerCase();
    const searchLastName = document.getElementById("searchLastName").value.toLowerCase();
    const searchZip = document.getElementById("searchZip").value.toLowerCase();
    const searchState = document.getElementById("searchState").value.toLowerCase();
    const filterActive = document.getElementById("filterActive").checked;

    fetchContacts().then(data => {
        const filteredContacts = data.filter(contact => {
            const firstName = contact.name.split(' ')[0].toLowerCase();
            const lastName = contact.name.split(' ')[1].toLowerCase();
            const zip = contact.zip.toString();
            const state = contact.state.toLowerCase();
            const isActive = contact.PhysicallyActive;

            return (
                (searchFirstName === '' || firstName.includes(searchFirstName)) &&
                (searchLastName === '' || lastName.includes(searchLastName)) &&
                (searchZip === '' || zip.includes(searchZip)) &&
                (searchState === '' || state.includes(searchState)) &&
                (!filterActive || isActive)
            );
        });

        populateContactList(filteredContacts);
        updateResultCount(filteredContacts.length);

    });
}

document.getElementById("filterButton").addEventListener("click", filterContacts);
document.getElementById("clearButton").addEventListener("click", clearFilters);

// Initially populate the list when the page loads
fetchContacts().then(data => populateContactList(data));
