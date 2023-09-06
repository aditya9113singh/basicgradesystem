
let btn=document.querySelector('.btn');
btn.addEventListener("click",()=>{
    

    let e=Number(document.querySelector('.eng').value);
    let m=Number(document.querySelector('.mat').value);
    let p=Number(document.querySelector('.phy').value);
    let b=Number(document.querySelector('.bio').value);
    let c=Number(document.querySelector('.che').value);    


    let tot=(e+m+b+c+p)/500*100;

    let res=document.querySelector('.result');
    let r="";
    if(tot>90)
    r='A';
    else if(tot>75)
    r='B';
    else if(tot>60)
    r='C';
    else if(tot>30)
    r='D';
    else
    r='fail';
    res.innerHTML=`Your Grade is ${r}`;
});