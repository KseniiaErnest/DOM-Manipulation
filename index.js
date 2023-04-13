console.log('INDEX.JS connected');

// ****************************** part 1 ******************************


document.querySelector('#new-task-form').addEventListener('submit', e => {
  e.preventDefault();

 // 1: get the input from user related to the new task and the owner of the task
  
  // 2: append it to the DOM
  
  // 3: clear the form after the submission
  
  const userInput = document.querySelector('#task-input');
  const userName = document.querySelector('#owner-input');

  const item = document.createElement('li');
  const item2 = document.createElement('p');
  item.innerText = userInput.value;
  item2.innerText = userName.value;

  const ulTask = document.querySelector('#tasks-list');
  ulTask.appendChild(item);
  ulTask.appendChild(item2);

  userInput.value = '';
  userName.value = '';
  
});

// ****************************** part 2 ******************************

// 1: get the DOM element that represents 'Update gif' button
// 2: add to click handler to it
// 3: get the DOM element that represents 'iframe tag'
// 4. change the attribute source to point to 'https://giphy.com/embed/1MTLxzwvOnvmE' after clicking on the 'Update gif' button

// 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears

const btn = document.querySelector('#update-button');

btn.addEventListener('click', () => {
  const iframeTag = document.querySelector('iframe');

  const gifSrc = iframeTag.getAttribute('src');
  
  if (gifSrc === 'https://giphy.com/embed/MOWPkhRAUbR7i') {
    iframeTag.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE') 
  } else {
    iframeTag.setAttribute('src', 'https://giphy.com/embed/MOWPkhRAUbR7i')
  }
})

