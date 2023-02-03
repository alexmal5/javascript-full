//task 1

export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let array = arr.slice();
  array.reverse();
  return array;
}
reverseArray([2, 5, 3, 8, 5, 9]);

//task 2

export const withdraw = (clients, balances, client, amount) => {
  const nameClient = clients.indexOf(client);

  if (balances[nameClient] > amount) {
    balances[nameClient] -= amount;
    return balances[nameClient];
  }
  return -1;
};

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])

//task 3

export const getAdults = (obj) => {
  const adults = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      adults[key] = obj[key];
    }
  }
  return adults;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
