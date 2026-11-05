const input = document.getElementById('textInput');
const button = document.getElementById('checkBtn');
button.addEventListener('click', function () {
    if (input.value === '') {
        input.style.borderColor = 'red';
         } else {
        input.style.borderColor = 'green';
         }
    
})