var Container = document.getElementById('container');
var Btn1 = document.getElementById('btn1');
var Tittle = document.getElementById('tittle');
var Paragraph = document.getElementById('paragraph')



Btn1.addEventListener('mouseover', () =>{
  Container.style.background ='url(img/background.gif)';
  Container.style.backgroundRepeat='no-repeat';
  Container.style.backgroundSize='cover';
  Tittle.style.color='white';
  Paragraph.style.color ='#859398';
  Container.style.boxShadow='inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px #0d217a';
  Btn1.style.boxShadow='inset 0 0 0 4px #174a97ad'

  
})
Btn1.addEventListener('mouseout', () =>{
  Container.style.background ='';
  Tittle.style.color='';
  Paragraph.style.color ='';
  Container.style.boxShadow='';
  Btn1.style.boxShadow=''
  
})