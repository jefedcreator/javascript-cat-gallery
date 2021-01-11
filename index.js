const images= document.getElementById('images');

function upDate(element){
    images.innerHTML=element.alt
    images.style.backgroundImage="url('" +element.src+"')"
}

function unDo(element){
    images.innerHTML='Hover over an image'
    images.style.backgroundImage="none"
}