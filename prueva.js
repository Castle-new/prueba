window.onload = function(){
var imagen = document.getElementById('imagen_web')
imagen.addEventListener('mouseover',cambiarImagen);
imagen.addEventListener('mouseout',imagenIniciar);

function cambiarImagen(){
this.setAttribute('src','https://1.bp.blogspot.com/-6oPInnJ8v70/XupNstj64wI/AAAAAAAAIxU/QNrYulkAij4ywzkD6Pd5kRwWCbHos5XKACK4BGAsYHg/s1100/2.jpg');
}

function imagenIniciar(){
this.setAttribute('src','https://1.bp.blogspot.com/-VETC3FT3XQE/XupOAwboIWI/AAAAAAAAIxw/h1ba5qusphwiO78QZ-elzeoyibTh-smPACK4BGAsYHg/s1100/1.jpg');
}
}