var starbtn=document.querySelector(".st")
var spbtn=document.querySelector(".sp")
var rebtn=document.querySelector(".re")
let hrs=min=sec=ms=0,settimmer;
starbtn.addEventListener('click',function(){
    starbtn.classList.add("st-active")
    spbtn.classList.remove("sp-active");
    settimmer=setInterval(()=>{
        ms++
        if(ms==100){
            sec++;
            ms=0
        }
        if(sec==60){
            min++;
            sec=0
        }
        if(min==60){
            hrs++;
            min=0
        }
        updatedisplay();
    },10);

})
spbtn.addEventListener("click",function(){
    clearInterval(settimmer);
    starbtn.classList.remove("st-active")
    spbtn.classList.add("sp-active");

})
rebtn.addEventListener("click",function(){
    hrs=min=sec=ms=0;
    updatedisplay();
    starbtn.classList.remove("st-active")
    spbtn.classList.remove("sp-active");
    clearInterval(settimmer);


})
function updatedisplay(){
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
    document.querySelector(".hrs").textContent=phrs;   
    document.querySelector(".min").innerText=pmin;
    document.querySelector(".sec").innerText=psec
    document.querySelector(".ms").innerText=pms
}