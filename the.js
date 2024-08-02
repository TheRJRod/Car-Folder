const divContainer = document.querySelector('.collapse-text');
let isClicked = true;

let showOrHide = function(){
    if(isClicked){
      divContainer.style.display = 'block';  
      isClicked = false;
    } else{
        divContainer.style.display = 'none';
        isClicked = true;
    }
    
}