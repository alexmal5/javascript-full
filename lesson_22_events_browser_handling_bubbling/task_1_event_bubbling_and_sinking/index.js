const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');

const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreenP = logTarget.bind(null, 'P', 'green');

const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const addClick = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

// addClick();

const clear = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const buttonClear = document.querySelector('.clear-btn');
buttonClear.addEventListener('click', clear);

const buttonAttach = document.querySelector('.attach-handlers-btn');
buttonAttach.addEventListener('click', addClick);

const removeClick = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

const buttonRemove = document.querySelector('.remove-handlers-btn');
buttonRemove.addEventListener('click', removeClick);
