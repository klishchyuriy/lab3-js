// Кліщ Юрій, ІА-401

// Завдання 1
function filterArray(arr) {
  return arr.filter(function (n) {
    return n % 2 === 0;
  });
}

console.log(filterArray([1, 2, 3, 4, 5, 6]));

// Завдання 2
function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const years = [1900, 2000, 2020, 2023, 2024, 2026];
for (const y of years) {
  console.log(y + ': ' + isLeap(y));
}

// Завдання 3
function groupByAge(people) {
  const result = {};
  for (const person of people) {
    if (!result[person.age]) {
      result[person.age] = [];
    }
    result[person.age].push(person.name);
  }
  return result;
}

const people = [
  { name: "Oleg", age: 25 },
  { name: "Alla", age: 30 },
  { name: "Peter", age: 25 },
  { name: "Ivan", age: 30 }
];

console.log(groupByAge(people));

// Вивід на сторінку
function show(id, text) {
  document.getElementById(id).textContent = text;
}

show('res1', JSON.stringify(filterArray([1, 2, 3, 4, 5, 6])));
show('res2', years.map(y => y + ': ' + isLeap(y)).join('\n'));
show('res3', JSON.stringify(groupByAge(people), null, 2));
