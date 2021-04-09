let logo = document.querySelector('#logo');
let footer = document.querySelector('#footer');

logo.addEventListener('click', () => {
	document.body.style.background = "black";
  document.body.style.color = "white";
  document.body.style.transition = "0.5s ease-in";
  
  footer.style.background = "grey";
  footer.style.color = "#333";
})


//AOS 
AOS.init();
  


const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () =>{
  navUL.classList.toggle('show');
});