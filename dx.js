//hola xd
function cuandoDigaSi(){
    rsp1 = "Sabía que dirias si <3 TE AMO MUCHO!!!";
    rsp2 ="<3 Eres el CSS de mi vida bebé <3";

    document.getElementById("resultado").innerHTML = rsp1;
    document.getElementById("resultado0").innerHTML = rsp2;

}
function cuandoDigaNo(){
    ancho = window.innerWidth;
    alto = window.innerHeight;

    x = (Math.random() * ancho) + "px";
    y = (Math.random() * alto) + "px";

    document.getElementById("btn2").style.position = "absolute";
    document.getElementById("btn2").style.left = x;
    document.getElementById("btn2").style.top = y;
}