function renderList(array) {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';
    const listItems = array.map(item => `<li>${item}</li>`);
    const list = document.createElement('ul');
    list.innerHTML = listItems.join('');
    listContainer.appendChild(list);
  }
  const array1 = ['1', '2', '3', 'sea', 'user', '23'];
  
  renderList(array1);
  