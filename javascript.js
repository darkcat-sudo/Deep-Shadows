
function myLoad ()
  { let preload = document.getElementById('loding');
    let changeid = document.getElementById('ny');
      preload.style.display = 'none';
      changeid.setAttribute('id','chy');

   }
   function mui(){
    let gyo =document.querySelector("#list");
    let nj=document.querySelector(".bac");
    let dug=document.querySelector(".burger");
    nj.classList.toggle("backbt");
    gyo.classList.toggle("listr");
    dug.classList.toggle("onburger");
  
  }
function nut(){
  let fut=document.querySelector(".vuj");
  let but=document.querySelector(".listtop");
 
  fut.classList.toggle("buj");
  but.classList.toggle("buj");
  
}
  { 
function change() {
    let gt = document.querySelector("#list");
    let hyy = document.querySelector(".burger");
    let ny = document.querySelector(".bac");
    gt.classList.toggle("listr");
    hyy.classList.toggle("onburger");
    ny.classList.toggle("backbt");
    
}
document.querySelector('.burger').addEventListener('click',change);
}
/* theme toggle */
/* function themee(){
 let child1 = document.querySelector(".logo");
 let child2 = document.querySelector(".navbar");
 let child3 = document.querySelector(".search-bar");
 let child4 = document.querySelector(".lis");
 let child5 = document.querySelector(".main");
 const child6 = document.getElementsByClassName('hr1');
 for (let i = 0; i <  child6.length; i++){
  child6[i].classList.toggle("lhr1");
 }
 child1.classList.toggle("llogo");
 child2.classList.toggle("lnavbar");
 child3.classList.toggle("lsearch-bar");
 child4.classList.toggle("llis");
 child5.classList.toggle("lmain");
 
 console.log("that");
} */
function themee() {
  const bodyElement = document.querySelector('body');
  const currentColor = getComputedStyle(bodyElement).getPropertyValue('--inside-color').trim();
  const currentmain = getComputedStyle(bodyElement).getPropertyValue('--main-color').trim();
  const currentmid = getComputedStyle(bodyElement).getPropertyValue('--mid-color').trim();
  
  if (currentColor === '#ff0000') {
    bodyElement.style.setProperty('--inside-color', '#000000');
    bodyElement.style.setProperty('--linside-color', '#ff0000');
    
  } else {
    bodyElement.style.setProperty('--inside-color', '#ff0000');
    bodyElement.style.setProperty('--linside-color', '#000000');
    
  }
  if (currentmain === '#1f1e1e') {
    bodyElement.style.setProperty('--main-color', '#ffffff');
    bodyElement.style.setProperty('--lmain-color', '#1f1e1e');
    
  } else {
    bodyElement.style.setProperty('--main-color', '#1f1e1e');
    bodyElement.style.setProperty('--lmain-color', '#ffffff');
    
  }
  if (currentmid === '#000000') {
    bodyElement.style.setProperty('--mid-color', '#ffffff');
    bodyElement.style.setProperty('--lmid-color', '#000000');
    
  } else {
    bodyElement.style.setProperty('--mid-color', '#000000');
    bodyElement.style.setProperty('--lmid-color', '#ffffff');
    
  }
  let child2 = document.querySelector(".navbar");
  child2.classList.toggle("lnavbar");
}
/* Add Contant */

