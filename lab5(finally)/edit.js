document.addEventListener("DOMContentLoaded", function() {
  const selectBox = document.getElementById("selectBox");
  const editInput1 = document.getElementById("editInput1");
  const editInput2 = document.getElementById("editInput2");
  const editButton = document.getElementById("editButton");
  const deleteButton = document.getElementById("deleteButton");
  let ordersData = [];

  reloadInputs();
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
        reloadInputs();
      } else {
        alert("HTTP-Error: " + response.status);
      }
  }

  function reloadInputs() {
    while (selectBox.firstChild) {
      selectBox.firstChild.remove()
    }

    if (ordersData.length) {
      ordersData.forEach(function (order) {
        const option = document.createElement('option');
        option.text = order.Name;
        option.value = order.idOrder;
        selectBox.appendChild(option);
      });
      selectBox.disabled = false;
      editInput1.disabled = false;
      editInput2.disabled = false;
      editButton.disabled = false;
      deleteButton.disabled = false;
      const selectedOrder = ordersData[0];
      editInput1.value = selectedOrder.Name;
      editInput2.value = selectedOrder.idOrder;
    } else {
      selectBox.disabled = true
      editInput1.disabled = true;
      editInput2.disabled = true;
      editButton.disabled = true;
      deleteButton.disabled = true;
      editInput1.value = "";
      editInput2.value = "";
    }
  }

  // Обробка події вибору запису для редагування
  selectBox.addEventListener('change',  function (ev) {
    const id = ev.target.value;
    const order =  ordersData.find((order) =>  order.idOrder == id);
    editInput1.value = order?.Name;
    editInput2.value = id;
  });

  // Обробка події редагування 
  editButton.addEventListener('click', async function () {
    const id = selectBox.value;
    const selectedOrder = ordersData.find((order) =>  order.idOrder == id);
    selectedOrder.Name = editInput1.value;
    selectedOrder.idOrder = editInput2.value;
    // Запит на редагування на сервері
    let response = await fetch(`http://127.0.0.1:5000/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(selectedOrder)
    });

    if (response.ok) {
      fetchOrders();
      alert("Updated")
    } else {
      alert("HTTP-Error: " + response.status);
    }
  });

  // Обробка події видалення запису
  deleteButton.addEventListener('click', async function () {
    const id = selectBox.value;
  // Запит на редагування на сервері
    let response = await fetch(`http://127.0.0.1:5000/orders/${id}`, {
    method: 'DELETE'
    });

    if (response.ok) {
      fetchOrders();
      alert("Removed");
    } else {
      alert("HTTP-Error: " + response.status);
    }
  });
});
