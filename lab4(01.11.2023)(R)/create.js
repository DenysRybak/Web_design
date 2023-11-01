document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById("myInput1");
    const input2 = document.getElementById("myInput2");
    const input3 = document.getElementById("myInput3");
    const createButton = document.getElementById("createButton");
  
    createButton.addEventListener("click", function() {
      const value1 = input1.value;
      const value2 = input2.value;
      const value3 = input3.value;
      
      const data = JSON.parse(localStorage.getItem('animalData')) || [];
      data.push({ name: value1, description: value2, price: value3 });
  
      localStorage.setItem('animalData', JSON.stringify(data));
  
      // Очищення полів вводу
      input1.value = '';
      input2.value = '';
      input3.value = '';
    });
  });
  