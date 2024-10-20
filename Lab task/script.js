// Add an event listener to the button
document.getElementById('loadDataBtn').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    const url = 'https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json';
  
    // Open an asynchronous GET request
    xhr.open('GET', url, true);
  
    // Define the function to run when the response is ready
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        displayData(data);
      }
    };
  
    // Send the request
    xhr.send();
  });
  
  // Function to display the data in the table
  function displayData(presidents) {
    const table = document.getElementById('presidentsTable');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; // Clear any previous data
  
    // Loop through the data and create table rows
    presidents.forEach((president, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${president.president}</td>
        <td>${president.birth_year || 'N/A'}</td>
        <td>${president.death_year || 'N/A'}</td>
        <td>${president.took_office}</td>
        <td>${president.left_office || 'Present'}</td>
      `;
      tbody.appendChild(row);
    });
  
    // Make the table visible
    table.style.display = 'table';
  }
  