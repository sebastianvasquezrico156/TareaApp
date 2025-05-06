document.getElementById('addTaskBtn').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task) {
      const li = document.createElement('li');
      li.textContent = task;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
  
      li.appendChild(deleteBtn);
      document.getElementById('taskList').appendChild(li);
      input.value = '';
    }
  });