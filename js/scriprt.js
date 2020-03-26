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
  };
    new Glide('.glide', config).mount()


    // nav bar button 
    const navBut = document.getElementById('nav-but');
    let navUl = document.getElementById("nav-ul");
    navUl.style.right="-100%";
    navBut.addEventListener("click", ()=>{
      if(navUl.style.right == "-100%"){
        navUl.style.right= "0";
      console.log('hello');
      }else{ navUl.style.right="-100%";  }});

      //  button back to up
      const butUp = document.getElementById("but-up");
      butUp.addEventListener("click",()=> window.scrollTo({
        top:0,
        left:0,
      behavior: 'smooth'
      })
      );