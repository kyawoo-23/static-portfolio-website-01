let menuSection = document.querySelectorAll('nav .navbar-collapse ul li a');
let menuSection2 = document.querySelectorAll('nav .overlay .overlay-content a');
console.log(menuSection);
// for clickable event
menuSection.forEach(v=> {
  v.onclick = (()=> {
   setTimeout(()=> {
      menuSection.forEach(j=> j.classList.remove('active'))
    v.classList.add('active')
  },300)
   })
});

// for window scrolldown event

window.onscroll = (()=> {
  let mainSection = document.querySelectorAll('main section');

  mainSection.forEach((v,j)=> {
    let rect = v.getBoundingClientRect().y
    if(rect < window.innerHeight-200){
      menuSection.forEach(v=> v.classList.remove('active'))
      menuSection[j].classList.add('active')

      menuSection2.forEach(v=> v.classList.remove('active'))
      menuSection2[j].classList.add('active')
    }
  })
});
