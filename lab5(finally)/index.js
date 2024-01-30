document.addEventListener("DOMContentLoaded", function() {
  const ordersTable = document.getElementById("ordersTable");
  let ordersData = [];
  
  reloadOrdersTable(ordersData)
  // Витягуємо дані із сервера
  fetchOrders();

  async function fetchOrders() {
    // Запит на витяг даних на сервері
    let response = await fetch('http://127.0.0.1:5000/orders', {
      method: 'GET'
      });

      if (response.ok) {
        let result = await response.json();
       ordersData = result;
       reloadOrdersTable(ordersData)
      } else {
        alert("HTTP-Error: " + response.status);
      }
  }

  function reloadOrdersTable(ordersData) {
    while (ordersTable.firstChild) {
      ordersTable.firstChild.remove()
    }

    const table = document.createElement('table');
    const thead = table.createTHead();
    const row = thead.insertRow();
    const headers = ['ID', 'Name'];

    for (let header of headers) {
      let th = document.createElement('th');
      let text = document.createTextNode(header);
      th.appendChild(text);
      row.appendChild(th);
    }

    for (let order of ordersData) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.innerHTML = order.idOrder;
      cell2.innerHTML = order.Name;
    }

    ordersTable.innerHTML = '';
    ordersTable.appendChild(table);
  }

  function searchByName(searchTerm) {
    const filteredData = ordersData.filter(item => item.Name.toLowerCase().includes(searchTerm.toLowerCase()));
    reloadOrdersTable(filteredData);
  }

  // Обробка події пошуку
  document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim();
    searchByName(searchTerm);
  });
});
