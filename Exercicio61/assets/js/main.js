const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
const estilo = document.getElementById('myDiv');


let cont = 0;
let timer;
function iniciaRelogio() {
    timer = setInterval(() => {
        relogio.innerHTML = mostraHora(cont);
        cont += 1000;
    }, 1000);
}
iniciar.addEventListener("click", function (e) {
    clearInterval(timer);
    estilo.style.color = 'black';
    iniciaRelogio();
    
});

parar.addEventListener("click", function (e) {
    e.preventDefault();
    cont = cont;
    estilo.style.color = 'red';
    //relogio.innerHTML = mostraHora(cont);
    clearInterval(timer);


});

zerar.addEventListener("click", function (e) {
    e.preventDefault();
    cont = 0;
    clearInterval(timer);
    estilo.style.color = 'black';
   //clearInterval(timer2);
    relogio.innerHTML = `00:00:00`;

});

function mostraHora(cont) {
    let data = new Date();
    data.setHours(0, 0, 0, cont);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}