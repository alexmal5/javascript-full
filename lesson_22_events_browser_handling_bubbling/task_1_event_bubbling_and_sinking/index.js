const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreynP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const click = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreenDiv);

  spanElem.addEventListener('click', logGreyDiv, true);
  spanElem.addEventListener('click', logGreenDiv);
};

click();

const clear = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const buttonClear = document.querySelector('.clear-btn');
buttonClear.addEventListener('click', clear);

const buttonAttach = document.querySelector('.attach-handlers-btn');
buttonAttach.addEventListener('click', addHandleClick);

const removeClick = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreenDiv);

  spanElem.removeEventListener('click', logGreyDiv, true);
  spanElem.removeEventListener('click', logGreenDiv);
};

const buttonRemove = document.querySelector('.remove-handlers-btn');
buttonRemove.addEventListener('click', removeClick);
