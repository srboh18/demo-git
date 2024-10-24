"use strict";


document.getElementById("img1").addEventListener('mouseover', onMouseOver, false);
document.getElementById("img2").addEventListener('mouseover', onMouseOver, false);
document.getElementById("img3").addEventListener('mouseover', onMouseOver, false);
document.getElementById("img4").addEventListener('mouseover', onMouseOver, false);
document.getElementById("img5").addEventListener('mouseover', onMouseOver, false);

document.getElementById("img1").addEventListener('click', onMouseClick, false);
document.getElementById("img2").addEventListener('click', onMouseClick, false);
document.getElementById("img3").addEventListener('click', onMouseClick, false);
document.getElementById("img4").addEventListener('click', onMouseClick, false);
document.getElementById("img5").addEventListener('click', onMouseClick, false);

document.getElementById("img1").addEventListener('mouseout', OnMouseLeave, false);
document.getElementById("img2").addEventListener('mouseout', OnMouseLeave, false);
document.getElementById("img3").addEventListener('mouseout', OnMouseLeave, false);
document.getElementById("img4").addEventListener('mouseout', OnMouseLeave, false);
document.getElementById("img5").addEventListener('mouseout', OnMouseLeave, false);


let imageValue = 0;
function onMouseOver(event) {
    let desiredImage = event.target;
    let newImage = desiredImage.id;
    let vignette = document.getElementById("vignette");
    vignette.src = `vignettes/${newImage}.jpg`;
}
function onMouseClick(event) {
    imageValue=0;
    let desiredImage = event.target;
    let newImage = desiredImage.id;
    let image = document.getElementById("image");
    image.src = `images/${newImage}.jpg`;
   let i =0;
   let number =  i.toString();
   console.log();
    
    // for ( i = 1; imageValue != i; i++) {
       

    //     if (image.src.includes(number)) {
    //         imageValue = i;

    //     }

    // }
    // console.log(imageValue);
}
function OnMouseLeave(event) {
    // let currrentImage = document.getElementById("image");
    // let ImageSrc = currrentImage.src;



}