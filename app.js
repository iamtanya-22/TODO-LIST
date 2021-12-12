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
   form.addEventListener('submit',addTask);
   // Remove task 
   taskList.addEventListener('click',removeTask);
  // Remove task list
   clearBtn.addEventListener('click',removeTasks);
   // Filter task events
   filter.addEventListener('keyup',filterTasks);
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
   //Clear input
   taskInput.value='';
   
   e.preventDefault();
}

 // Remove task 
function removeTask(e)
{
  if(e.target.parentElement.classList.contains('delete-item'))
  {
    if(confirm('Are you sure?'))
    {
  e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}

 // Remove all taska
function removeTasks()
{
  taskList.innerHTML='';
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
