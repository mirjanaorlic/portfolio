
document.querySelector(".main-work").addEventListener("click", function() {    
    this.classList.toggle("is-active");   
    remove('.main-bio', '.main-contact');
});
document.querySelector(".main-bio").addEventListener("click", function() {
    this.classList.toggle("is-active");
    remove('.main-work', '.main-contact');
});
document.querySelector(".main-contact").addEventListener("click", function() {
    this.classList.toggle("is-active");
    remove('.main-bio', '.main-work');
});
function remove(a, b) {
    document.querySelector(a).classList.remove("is-active");
    document.querySelector(b).classList.remove("is-active");
}

// Change background color on move

document.addEventListener('click', changeColor); 

function changeColor() {
    var  randcol= "";
    var allchar="0123456789ABCDEF";
    for(var i = 0; i < 6; i++){
         randcol += allchar[Math.floor(Math.random()*16)];
      }
      document.body.style.backgroundColor= "#"+randcol;
};
