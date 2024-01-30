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
  
  
   
    sortButton.addEventListener("click", function() {
      // Отримуємо всі прямокутники результатів
      const resultRectangles = document.querySelectorAll(".result-rectangle");
  
      // Створюємо масив для зберігання даних про прямокутники
      const rectanglesData = [];
  
      // Заповнюємо масив даними з прямокутників
      resultRectangles.forEach(function(rectangle) {
        const text = rectangle.innerText; // Текст у прямокутнику
        const priceMatch = text.match(/Ціна: (\d+)/); // Використовуємо регулярний вираз, щоб знайти ціну
  
        if (priceMatch) {
          const price = parseFloat(priceMatch[1]);
          rectanglesData.push({ element: rectangle, price: price });
        }
      });
  
      // Сортуємо масив прямокутників за ціною в порядку спадання
      rectanglesData.sort(function(a, b) {
        return b.price - a.price;
      });
  
      // Очищуємо контейнер з результатами
      resultsContainer.innerHTML = '';
  
      // Додаємо відсортовані прямокутники до контейнера
      rectanglesData.forEach(function(data) {
        resultsContainer.appendChild(data.element);
      });
    });
  
    // Перемикач між сторінками
document.getElementById("createTablePageButton").addEventListener("click", function() {
  // Приховати сторінку редагування і відобразити сторінку створення
  document.querySelector(".create-table").style.display = "block";
  document.querySelector(".edit-table").style.display = "none";
});

document.getElementById("editTablePageButton").addEventListener("click", function() {
  // Приховати сторінку створення і відобразити сторінку редагування
  document.querySelector(".create-table").style.display = "none";
  document.querySelector(".edit-table").style.display = "block";
});

// Функція для створення таблички
document.getElementById("createTableButton").addEventListener("click", function() {
  // Отримати дані з полів вводу
  const tableName = document.getElementById("tableName").value;
  const tableDescription = document.getElementById("tableDescription").value;
  const tablePrice = document.getElementById("tablePrice").value;

  // Створити та відобразити табличку на сторінці
  const resultRectangle = document.createElement("div");
  resultRectangle.className = "result-rectangle";
  resultRectangle.innerText = `Назва: ${tableName}, Опис: ${tableDescription}, Ціна: ${tablePrice}`;
  resultsContainer.appendChild(resultRectangle);

  // Підрахувати загальну суму
  totalSum += parseFloat(tablePrice);
  totalSumElement.innerText = `Сума всіх цін: ${totalSum}`;
});

// Функція для редагування таблички
document.getElementById("editTableButton").addEventListener("click", function() {
  // Отримати дані з полів вводу редагування
  const editTableName = document.getElementById("editTableName").value;
  const editTableDescription = document.getElementById("editTableDescription").value;
  const editTablePrice = document.getElementById("editTablePrice").value;

  // Редагувати вибрану табличку (потрібно додати логіку редагування)
  // ...

  // Оновити загальну суму (якщо потрібно)
  // ...
});

document.getElementById("editTablePageButton").addEventListener("click", function() {
  // Перенаправити користувача на іншу сторінку (part2.html)
  window.location.href = "part2.html";
});

    
  
});
  