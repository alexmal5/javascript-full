export const gerItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

gerItemsList();

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');

  console.dir(Array.from(elementsArray));
  return Array.from(elementsArray);
};

getItemsArray();
