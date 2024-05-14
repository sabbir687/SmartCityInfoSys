document.querySelector('.toggle-menu').addEventListener('click', function () {
    document.querySelector('.menuber').classList.toggle('active');
});

var div= document.getElementById('desc2');
var display=0;
function hideshow(){
    if(display==0){
        div.style.display = 'block';
        div1.style.display='none';
        div2.style.display='none';
        div3.style.display='none';
        display=1;
        display1=0;
        display2=0;
        display3=0;
    }
    else{
        div.style.display='none'
        display=0;
    }
}
var div1= document.getElementById('desc3');
var display1=0;
function hideshow1(){
    if(display1==0){
        div1.style.display = 'block';
        div.style.display='none';
        div2.style.display='none';
        div3.style.display='none';
        display1=1;
        display=0;
        display2=0;
        display3=0;
    }
    else{
        div1.style.display='none'
        display1=0;
    }
}
var div2= document.getElementById('desc4');
var display2=0;
function hideshow2(){
    if(display2==0){
        div2.style.display = 'block';
        div1.style.display='none';
        div.style.display='none';
        div3.style.display='none';
        display2=1;
        display1=0;
        display=0;
        display3=0;
    }
    else{
        div2.style.display='none';
        display2=0;
    }
}
var div3= document.getElementById('desc5');
var display3=0;
function hideshow3(){
    if(display3==0){
        div3.style.display = 'block';
        div1.style.display='none';
        div2.style.display='none';
        div.style.display='none';
        display3=1;
        display1=0;
        display2=0;
        display=0;
    }
    else{
        div3.style.display='none'
        display3=0;
    }
}

