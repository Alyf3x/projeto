let loginBnt = document.querySelector ('.loginBnt');
let cadastroBnt = document.querySelector ('.cadastroBnt');

let body = document.querySelector ('body');


cadastroBnt.onclick = function() {
    body.classList.remove ('slide');


}
loginBnt.onclick = function() {
    body.classList.add ('slide');
    
   }