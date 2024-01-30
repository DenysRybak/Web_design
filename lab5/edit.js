document.addEventListener("DOMContentLoaded", function() {
  const selectRecord = document.getElementById("selectRecord");
  const editInput1 = document.getElementById("editInput1");
  const editInput2 = document.getElementById("editInput2");
  const editInput3 = document.getElementById("editInput3");
  const editButton = document.getElementById("editButton");
  const deleteButton = document.getElementById("deleteButton");

  // Заповнюємо вибір запису з існуючими даними
  const data = JSON.parse(localStorage.getItem('animalData')) || [];
  data.forEach(function (record, index) {
    const option = document.createElement('option');
    option.value = index;
    option.text = record.name;
    selectRecord.appendChild(option);
  });

  // Обробка події вибору запису для редагування
  selectRecord.addEventListener('change', function () {
    const selectedIndex = selectRecord.value;
    const selectedRecord = data[selectedIndex];
    editInput1.value = selectedRecord.name;
    editInput2.value = selectedRecord.description;
    editInput3.value = selectedRecord.price;
  });

  // Обробка події редагування 
  editButton.addEventListener('click', function () {
    const selectedIndex = selectRecord.value;
    const selectedRecord = data[selectedIndex];
    selectedRecord.name = editInput1.value;
    selectedRecord.description = editInput2.value;
    selectedRecord.price = editInput3.value;

    // Зберігаємо оновлені дані в локальному сховищі
    localStorage.setItem('animalData', JSON.stringify(data));

    // Очищення полів вводу
    editInput1.value = '';
    editInput2.value = '';
    editInput3.value = '';
  });

  // Обробка події видалення запису
  deleteButton.addEventListener('click', function () {
    const selectedIndex = selectRecord.value;
    data.splice(selectedIndex, 1); // Видаляємо запис з масиву даних
    selectRecord.remove(selectedIndex); // Видаляємо вибраний елемент з випадаючого списку

    // Зберігаємо оновлені дані в локальному сховищі
    localStorage.setItem('animalData', JSON.stringify(data));

    // Очищення полів вводу
    editInput1.value = '';
    editInput2.value = '';
    editInput3.value = '';
  });
});
