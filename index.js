// Получаем доступ к элементам страницы с помощью их ID
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const price4 = document.getElementById("price4");

// Создаем массив из начальных цен, которые мы получили из элементов страницы
const originalPrices = [
  parseFloat(price1.innerHTML),
  parseFloat(price2.innerHTML),
  parseFloat(price3.innerHTML),
  parseFloat(price4.innerHTML),
];

// Получаем элемент суммы цен и вычисляем итоговую сумму, округленную до двух знаков после запятой
let priceSum = document.getElementById("priceSum");
priceSum.innerHTML = originalPrices
  .reduce((acc, curr) => acc + curr, 0)
  .toFixed(2);

// Функция для обработки события клика по кнопке "Sale20%"
function clickSale20() {
  // Создаем новый массив со скидками на каждый товар
  const discountedPrices = originalPrices.map((price) => price * 0.8);
  // Записываем скидки в элементы страницы, округляя до двух знаков после запятой
  price1.innerHTML = discountedPrices[0].toFixed(2);
  price2.innerHTML = discountedPrices[1].toFixed(2);
  price3.innerHTML = discountedPrices[2].toFixed(2);
  price4.innerHTML = discountedPrices[3].toFixed(2);
  // Вычисляем новую сумму цен со скидками, округленную до двух знаков после запятой, и записываем ее в элемент суммы цен
  priceSum.innerHTML = discountedPrices
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
}
