// Script to fetch and save data to Google Sheets

// Define the API endpoint URL
const apiUrl = 'https://script.google.com/macros/s/AKfycbwPGOhyc8H5osB0zk8AOO4qmpEgivFAKysbf3Mie5defKWBSruB95dLyqX6OsT7zjQN/exec';

// Function to fetch data
async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        // Add code to save data to Google Sheets
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to initiate the data fetching
fetchData();