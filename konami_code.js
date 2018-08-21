const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index=0;

function init(event) {
  // Write your JavaScript code inside the init() function
  let bodyTag=document.getElementsByTagName('body');
  let keypressed=bodyTag.addEventListener('keydown',event.which);
  console.log(keypressed);
  let convertedValue=parseInt(keypressed);
   if (convertedValue===code[index] && index<10){
     index++;
   }
   else if (index<10) {
     index=0;
   }
   else if (index===10){
   alert('Hurray');
   }
}