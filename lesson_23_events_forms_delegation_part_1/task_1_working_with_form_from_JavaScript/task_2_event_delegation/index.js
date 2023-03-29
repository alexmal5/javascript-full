const generateNumbersRange = (from, to) => {
  const result = [];
  for (let index = from; index <= to; index++) {
    result.push(index);
  }
  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      (seatNumber) =>
        `<div class="sector__seat" data-seat-number="${seatNumber}"></div>
  `
    )
    .join('');

const getSectorLines = () => {
  const seatString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      (
        lineNumber
      ) => `<div class="sector__line" data-line-number="${lineNumber}">${seatString}</div>
  `
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = getSectorLines();
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) =>
        `<div class="sector" data-sector-number="${sectorNumber}">${linesString}</div>
  `
    )
    .join('');
  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }

  const seatNumbers = event.target.dataset.seatNumber;
  const lineNumbers = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumbers = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.textContent = `S ${sectorNumbers} - L ${lineNumbers} - S ${seatNumbers}`;
};

arenaElem.addEventListener('click', onSeatSelect);
renderArena();
