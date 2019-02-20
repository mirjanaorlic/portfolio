
document.getElementById("main__work").addEventListener("click", function() {    
    this.classList.toggle("is-active");   
});

document.getElementById("main__bio").addEventListener("click", function() {
    this.classList.toggle("is-active");
});

document.getElementById("main__contact").addEventListener("click", function() {
    this.classList.toggle("is-active");
});


function remove(a, b) {
    document.getElementById(a).classList.remove("is-active");
    document.getElementById(b).classList.remove("is-active");
}

