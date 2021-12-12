// define UI variables
const taskInput=document.querySelector('#task');
const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
loadEventListeners();
 // load event listeners
 function loadEventListeners()
 {
   // DOM Load Event
   document.addEventListener('DOMContentLoaded',getTasks);
   form.addEventListener('submit',addTask);
   // Remove task 
   taskList.addEventListener('click',removeTask);
  // Remove task list
   clearBtn.addEventListener('click',removeTasks);
   // Filter task events
   filter.addEventListener('keyup',filterTasks);
 }

 // Get tasks from LS
 function getTasks()
 {
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
     tasks=[];
  }
  else
  {
  tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task)
  {
   //create li element
  const li=document.createElement('li');
  li.className='collection-item';
  li.appendChild(document.createTextNode(task));
  
   // Create link element
   const link = document.createElement('a');
   link.className='delete-item secondary-content';
   // Add icon html
   link.innerHTML='<i class="fa fa-remove"></i>';
   // Append the link to li
   li.appendChild(link);
   //Append li to ul
   taskList.appendChild(li);
  });
 }
 //Add task
 function addTask(e)
{
  if(taskInput.value==='')
  {
  alert('Add a task');
  }
  //create li element
  const li=document.createElement('li');
  li.className='collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  
   // Create link element
   const link = document.createElement('a');
   link.className='delete-item secondary-content';
   // Add icon html
   link.innerHTML='<i class="fa fa-remove"></i>';
   // Append the link to li
   li.appendChild(link);
   //Append li to ul
   taskList.appendChild(li);
   //Add LS
   storeTaskInLocalStorage(taskInput.value);
   //Clear input
   taskInput.value='';
   
   e.preventDefault();
}

//Store Task
function storeTaskInLocalStorage(task)
{
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
     tasks=[];
  }
  else
  {
  tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

 // Remove task 
function removeTask(e)
{
  if(e.target.parentElement.classList.contains('delete-item'))
  {
    if(confirm('Are you sure?'))
    {
    e.target.parentElement.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
 
//Remove from LS
function removeTaskFromLocalStorage(taskItem)
{
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
     tasks=[];
  }
  else
  {
  tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task,index)
  {
    if(taskItem.textContent=== task)
    {
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

 // Remove all taska
function removeTasks()
{
  taskList.innerHTML='';
  clearTasksFromLocalStorage();
}
//clear tasks from LS
function clearTasksFromLocalStorage()
{
  localStorage.clear();
}

// Filter tasks
function filterTasks(e)
{
  const text=e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task)
  {
    const item=task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display= 'block';
    }
    else{
      task.style.display= 'none';
    }
  })
}
