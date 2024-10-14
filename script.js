var count = 0;
const slides = document.querySelectorAll(".feature");

slides.forEach(
  (slide,index) =>(
    slide.style.left = `${index * 100}%`
  )
)
const next = () =>{
  count++;
  slideImage();
}

const goprev = () =>{
  count--
  slideImage();
}
const gonext = () =>{
  count++
 count.limit = slides.length;
   slideImage();
}
const slideImage = () =>{
  slides.forEach(
    (slide) =>{
      slide.style.transform = `translateX(-${count * 100}%)`;
    }
    
  )
  if(count > slides.length){
    count = 0;
  }else if(count < '0'){
    count = slides.length;
  }
}
const btnsubmit = document.getElementById("btn29");

btnsubmit.addEventListener("click",()=>{
alert("thank you for your submition")
  btnsubmit.innerHTML = "SUBMITTED";
})
