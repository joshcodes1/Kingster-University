var navLinks = 
document.getElementsByClassName('nav-links');
var closeBtn =
document.getElementById('x-btn');
var openBtn =
document.getElementById('opn-btn');
openBtn.addEventListener('click',()=>{navLinks[0].style.right ='0';})
closeBtn.addEventListener('click',()=>{navLinks[0].style.right ='-200px';})