//Variables
const bienvenida = document.querySelector('#bienvenida');



//IIEF
 

//FUnciones

export const cargarBienvenida = () => {
    let url = '../page/file/bienvenida.txt';
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            bienvenida.innerHTML = `<p class="text-justify">${this.responseText}</p>`;
            console.log(this.responseText);
        }
    }
    bienvenida.addEventListener('load',cargarBienvenida,true);
};
