document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById("myInput1");
    const createButton = document.getElementById("createButton");
  
    createButton.addEventListener("click", async function() {
      const value1 = input1.value;
      let order = {
        Name: value1,
        idOrder: ""
      };

      // Запит на додавання на сервері
      let response = await fetch('http://127.0.0.1:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(order)
      });

      if (response.status == 201) {
      // Очищення полів вводу
        input1.value = "";
        alert("Created")
      } else {
        alert("HTTP-Error: " + response.status);
      }
    });
  });
  