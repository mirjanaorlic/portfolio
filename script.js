
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

// Change background color on click

document.addEventListener('click', changeColor); 

function changeColor() {
    var  randcol= "";
    var allchar="0123456789ABCDEF";
    for(var i = 0; i < 6; i++){
         randcol += allchar[Math.floor(Math.random()*16)];
      }
      document.body.style.backgroundColor= "#"+randcol;
      console.log(randcol);
};


var rgb = [255, 0, 0];

document.addEventListener('click', changeColor); 

function changeColor() {
    // randomly update
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);
  
    
    var o = Math.round(((parseInt(rgb[0]) * 299) +
                        (parseInt(rgb[1]) * 587) +
                        (parseInt(rgb[2]) * 114)) / 1000);
    var fore = (o > 125) ? 'black' : 'white';
    var back = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';

    document.body.style.backgroundColor = back;
    document.body.style.color = fore;

    document.getElementById('text').style.fill = fore;
    // document.getElementsByClassName('main').style.borderTop = fore;
    // document.getElementsByClassName('main-work').style.borderRight = fore;
    // document.getElementsByClassName('main-bio').style.borderRight = fore;
    // document.links.style.color = fore;
    var links = document.links;
    for(var i = 0; i < links.length; i++) {
        document.links[i].style.color = fore;
    }

    var githubLogo = document.getElementsByClassName('github-logo');
    for (var i = 0; i < githubLogo.length; i++) {
        githubLogo[i].style.fill = fore;
      }
    
  }