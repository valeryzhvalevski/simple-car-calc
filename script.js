const form = document.forms["form"];
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const carMake = document.getElementById("car_make").value;
  const fuelType = document.querySelector('input[name="fuel_type"]:checked');
  const engineDisplacement = Number(document.getElementById("engine_displacement").value);
  const maxComplectation = document.querySelector('input[name="car_max_complectation"]').checked;
  const carRus = document.querySelector('input[name="car_rus"]').checked;

  let basePrice = 0;

  switch (carMake) {
    case "audi":
      basePrice = 30000;
      break;
    case "toyota":
      basePrice = 25000;
      break;
    case "bmw":
      basePrice = 35000;
      break;
    case "mercedes":
      basePrice = 39000;
      break;
    case "honda":
      basePrice = 20000;
      break;
    default:
      alert("Выберите марку и нажмите на кнопку \"Рассчитать\"");
  }

  if (!fuelType) {
    alert("Выберите тип топлива и нажмите на кнопку \"Рассчитать\"");
  } else {
    switch (fuelType.value) {
      case "petrol":
        basePrice += 1000;
        break;
      case "diesel":
        basePrice += 2000;
        break;
      case "electric":
        basePrice += 5000;
        break;
      default:
        break;
    }
  }

  if (!engineDisplacement) {
    alert("Введите объем двигателя и нажмите на кнопку \"Рассчитать\"");
} else {
    basePrice += engineDisplacement * 20;
}
  if (maxComplectation) {
    basePrice += 5000;
  }

  if (carRus) {
    basePrice *= 0.6;
  }

  resultDiv.textContent = `Стоимость авто: ${basePrice} USD`;
});
