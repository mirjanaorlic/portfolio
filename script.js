
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


