const slides =document.querySelectorAll('.slide');
const next=document.getElementById('next');
const prev=document.getElementById('prev');

const nextSlider=()=>{ 
    const activeSlide =document.querySelector('active');
    activeSlide.classList.remove('active');

    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add('active');
    }
    else{
        slides[0].classList.add('active');
    }
}
const prevSlide=()=>{ 
    const activeSlide =document.querySelector('active');
    activeSlide.classList.remove('active');

    if(activeSlide.previousElementSibling){
        activeSlide.previousElementSibling.add('active');
    }
    else{
        slides[slides.length-1].classList.add('active');
    }
}
next.addEventListener('click',( )=>{
    nextSlide();
});
prev.addEventListener('click',( )=>{
    prevSlide();
    });
    function validateForm() {
        var name = document.forms['form1'][0].value;
        var lastname = document.forms['form1'][1].value;
        var email = document.forms['form1'][2].value
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if((name == null || name == "")&& (lastname == null || lastname == "")){
            alert("Lütfen Adınızı ve Soyadınızı giriniz!!")
            return false;
        }
    
        else if (name == null || name == "") {
          alert("İsim kısmı boş bırakılamaz");
          return false;
        }
      
        else if (lastname == null || lastname == "") {
          alert("Soyisim kısmı boş bırakılamaz");
          return false;
        }
        if(email.match(mailformat)){
            document.form1.email.focus();
            return true;
        }
        else {
            alert("Lütfen geçerli bir mail adresi giriniz!");
            return false;
            document.form1.email.focus();

        }
        
      }
