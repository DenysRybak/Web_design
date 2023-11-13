document.addEventListener("DOMContentLoaded", function() {
  // Отримуємо елементи полів та кнопок
  const input1 = document.getElementById("myInput1");
  const input2 = document.getElementById("myInput2");
  const input3 = document.getElementById("myInput3");
  const submitButton = document.getElementById("submitButton");
  const searchButton = document.getElementById("searchButton");
  const sortButton = document.getElementById("sortButton");
  const searchInput = document.getElementById("myInput4");
  const totalSumElement = document.getElementById("totalSum");
  const calculateTotalSumButton = document.getElementById("calculateTotalSumButton");
  let totalSum = 0;

  // Отримуємо елемент, в якому будемо виводити результати
  const resultsContainer = document.querySelector(".results_inner");

  // Додаємо обробник події на кнопку "Відправити"
  submitButton.addEventListener("click", function() {
    // Отримуємо значення з полів
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    // Створюємо прямокутник з отриманими значеннями
    const resultRectangle = document.createElement("div");
    resultRectangle.className = "result-rectangle";
    resultRectangle.innerText = `Назва: ${value1}, Опис: ${value2}, Ціна: ${value3}`;

    // Додаємо прямокутник до контейнера з результатами
    resultsContainer.appendChild(resultRectangle);

    // Підраховуємо загальну суму цін та виводимо її
    totalSum += parseFloat(value3);
    totalSumElement.innerText = `Сума всіх цін: ${totalSum}`;
  });

  // Додаємо обробник події на кнопку "Пошук"
  searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value.toLowerCase(); // Отримуємо значення пошукового запиту

    // Отримуємо всі прямокутники результатів
    const resultRectangles = document.querySelectorAll(".result-rectangle");

    // Проходимося по кожному прямокутнику та перевіряємо, чи містить він введений пошуковий запит
    resultRectangles.forEach(function(rectangle) {
      const text = rectangle.innerText.toLowerCase(); // Текст у прямокутнику

      if (text.includes(searchTerm)) {
        // Якщо текст прямокутника містить пошуковий запит, то відображаємо його
        rectangle.style.display = "block";
      } else {
        // В іншому випадку приховуємо прямокутник
        rectangle.style.display = "none";
      }
    });

    // Створюємо новий прямокутник з результатами пошуку та виводимо його
    const searchResultRectangle = document.createElement("div");
    searchResultRectangle.className = "result-rectangle";
    searchResultRectangle.innerText = `Пошуковий результат: ${searchTerm}`;
    resultsContainer.appendChild(searchResultRectangle);
  });


  // Додаємо обробник події на кнопку "Розрахувати суму всіх цін"
  calculateTotalSumButton.addEventListener("click", function() {
    // Виводимо суму всіх цін в поле під кнопкою "Sort"
    totalSumElement.innerText = `Сума всіх цін: ${totalSum}`;
  });

  sortButton.addEventListener("click", function() {
    // Отримуємо всі прямокутники результатів
    const resultRectangles = document.querySelectorAll(".result-rectangle");
  
    // Перетворюємо колекцію DOM-елементів в масив
    const resultArray = Array.from(resultRectangles);
  
    // Сортуємо масив прямокутників за ціною, яка знаходиться в даних атрибутах
    resultArray.sort(function(a, b) {
      const priceA = parseFloat(a.querySelector(".price").innerText);
      const priceB = parseFloat(b.querySelector(".price").innerText);
      return priceB - priceA; // Сортуємо за спаданням ціни
    });
  
    // Очищаємо контейнер результатів
    resultsContainer.innerHTML = "";
  
    // Додаємо відсортовані прямокутники назад до контейнера
    resultArray.forEach(function(rectangle) {
      resultsContainer.appendChild(rectangle);
    });
  });
  
  

});
