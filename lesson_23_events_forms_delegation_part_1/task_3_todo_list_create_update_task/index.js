const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

const buttonElem = document.querySelector('.create-task-btn');

const createNewTask = () => {
  const inputTextElem = document.querySelector('.task-input');
  if (!inputTextElem.value.length) return;
  tasks.push({
    text: inputTextElem.value,
    done: false,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
  inputTextElem.value = '';
};

buttonElem.addEventListener('click', createNewTask);

const changeClassDone = ({ target }) => {
  if (target.classList.contains('list__item-checkbox')) {
    const findId = tasks.find(({ id }) => id === target.dataset.id);
    findId.done = !findId.done;
    target.closest('.list__item').classList.toggle('list__item_done');
    renderTasks(tasks);
  }
};

listElem.addEventListener('click', changeClassDone);
