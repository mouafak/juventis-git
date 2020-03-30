const config={
    type: 'slider ',
    startAt: 1,
    perView: 4,
    gap:20,
    // autoplay : 1700,
    keyboard : true,
    hoverpause : true,
    perTouch : 5,
    rewind:true,
    rewindDuration : 3000,
    focusAt : "center",
    breakpoints : {
      1150 :{
        perView:2,
      },
      600:{
        perView: 1,
      }
    }
  };
    new Glide('.glide', config).mount()


    // nav bar button 
    const navBut = document.getElementById('nav-but');
    const navUl = document.getElementById("nav-ul");
  // function controle the size of window for menu
    function windowSize(x) {
      if (x.matches) { navUl.style.width = ' 0 '; } else {navUl.style.width = ' 100% ';  }};
    var x = window.matchMedia("(max-width: 1400px)");
    windowSize(x); 
    x.addListener(windowSize);

    navBut.addEventListener("click", ()=>{
      if(navUl.style.width == "0%"){
        navUl.style.width= "100%";
      }else{ navUl.style.width="0%";     }});

      //  button back to up
      const butUp = document.getElementById("but-up");
      butUp.addEventListener("click",()=> window.scrollTo({
        top:0,
        left:0,
      behavior: 'smooth'
      })
      );

      // nos produits menu , add classe active

    const ulProduits = document.querySelector('.ul-produits');
    const  l = ulProduits.children.length -1 ;
    function add(e){
      for(i =0 ; i<=l ;  i++ ){
        ulProduits.children[i].classList.remove('active');
      }
      e.target.className = 'active';
    }
    // add(e);