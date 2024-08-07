let numbervalue = document.getElementById('displayvalue');
let inc = document.getElementById('increase');
let reset = document.getElementById('Reset');
let dec = document.getElementById('decrease');
let body = document.getElementById('body');
let pso = ['top' , 'bottom' , 'left' , 'right' , 'top left' , 'top right' , 'left bottom' , 'right bottom' , 'center' , 'center top' , 'center bottom' ];

let tit = document.getElementById('title');




let value = 0;
inc.addEventListener('click' , ()=>{
    value++;
    numbervalue.textContent= value;
   let ran = Math.floor(Math.random() * pso.length);

   body.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/60/60520.png')"

   let arrpos = pso[ran];
   console.log(arrpos);
   
   body.style.backgroundPosition = arrpos;
   tit.textContent = value;
   
   



})
dec.addEventListener('click' , ()=>{
    if (value!=0) {
        value--;
        numbervalue.textContent = value;
        let ran = Math.floor(Math.random() * pso.length);

   body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Ic_exposure_minus_1_48px.svg/1200px-Ic_exposure_minus_1_48px.svg.png')"

   let arrpos = pso[ran];
   console.log(arrpos);
   
   body.style.backgroundPosition = arrpos;
   tit.textContent = value;
    }


    
})
reset.addEventListener('click' , ()=>{
    value=0
    numbervalue.textContent = 0;
    body.style.backgroundImage = "url('')"
    tit.textContent = 'Counter';
})