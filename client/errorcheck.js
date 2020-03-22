//Get all the inputs...
const title = document.querySelectorAll('input');

// Loop through them...
for(let title of title) {
  // Just before submit, the invalid event will fire, let's apply our class there.
  input.addEventListener('invalid', (event) => {
    input.classList.add('error');    
  }, false);