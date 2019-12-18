let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if (mySrc==='images/porsche.jpg'){
        myImage.setAttribute('src','images/porsche2.jpg');
    }
    else{
        myImage.setAttribute('src','images/porsche.jpg');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUsername(){
    let myname=prompt('Please enter your name');
    if(!myname || myname === null){
        setUsername();
    }
    else{
        localStorage.setItem('name',myname);
        myHeading.innerHTML=myname+ ' loves porsches'
    }
}
if(!localStorage.getItem('name')){
    setUsername();
}
else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent=storedName+ ' loves porsches';
}

myButton.onclick=function(){
    setUsername();
}