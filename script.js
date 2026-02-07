// Function to fetch data from Google Sheet
fetch('https://script.google.com/macros/s/AKfycbwPGOhyc8H5osB0zk8AOO4qmpEgivFAKysbf3Mie5defKWBSruB95dLyqX6OsT7zjQN/exec')
  .then(response => response.json())
  .then(data => {
    // Code to display the data for everyone
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));