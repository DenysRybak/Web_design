document.addEventListener("DOMContentLoaded", function() {
  const resultsTable = document.getElementById("resultsTable");
  let data = JSON.parse(localStorage.getItem('animalData')) || [];
  let isSorted = false;
  let sortOrder = 1; // 1 для сортування від найменшої до найбільшої ціни, -1 для зворотнього сортування

  function renderTable(sortedData) {
    const table = document.createElement('table');
    const thead = table.createTHead();
    const row = thead.insertRow();
    const headers = ['Назва', 'Опис', 'Ціна'];

    for (let header of headers) {
      let th = document.createElement('th');
      let text = document.createTextNode(header);
      th.appendChild(text);
      row.appendChild(th);
    }

    let totalSum = 0;

    for (let item of sortedData) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      cell1.innerHTML = item.name;
      cell2.innerHTML = item.description;
      cell3.innerHTML = item.price;

      totalSum += parseFloat(item.price);
    }

    resultsTable.innerHTML = '';
    resultsTable.appendChild(table);

    const totalSumElement = document.createElement('div');
    totalSumElement.textContent = `Сума всіх цін: ${totalSum}`;
    resultsTable.appendChild(totalSumElement);
  }

  function searchByName(searchTerm) {
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    renderTable(filteredData);
  }

  document.getElementById("sortOnAddButton").addEventListener("click", function() {
    isSorted = !isSorted;
    if (isSorted) {
      sortOrder = -1;
      document.getElementById("sortOnAddButton").textContent = "Сортувати за ціною (за спаданням)";
    } else {
      sortOrder = 1;
      document.getElementById("sortOnAddButton").textContent = "Сортувати за ціною (за зростанням)";
    }

    data.sort((a, b) => sortOrder * (a.price - b.price));
    renderTable(data);
  });

  renderTable(data);

  // Оновлення таблиці при додаванні нової таблички
  document.addEventListener("storage", function(e) {
    if (e.key === 'animalData') {
      data = JSON.parse(e.newValue);
      data.sort((a, b) => sortOrder * (a.price - b.price));
      renderTable(data);
    }
  });

  // Обробка події пошуку
  document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim();
    searchByName(searchTerm);
  });
});
