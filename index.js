/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:





const car = {
manufacturer: "BMW",
model: "X6",
year: 2020,
averageSpeed: 90,
fuelTankCapacity: 80,
averageFuelConsumption: 12.3,
drivers: ['Jon', 'Jan'],


//1.  Метод, який виводить на екран інформацію про автомобіль.

Information ()  {
   console.log (car)
}
};
car.Information ();

//2. Додавання ім’я водія у список

car.drivers.push('Pol','Sem');

//3. Перевірка водія на наявність його ім’я у списку

console.log(car.drivers.includes('Pol'));

//4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
const distance = +prompt('distance');
const calcFuel = (distance*(car.fuelTankCapacity/100)).toFixed(0);
let calcTime = +(distance/(car.averageSpeed)).toFixed(0);
const timeRelax = 1;

if (calcTime > 4 || calcTime < 8) {
   calcTime = (calcTime + timeRelax); 
   console.log (calcTime);
}
*/

