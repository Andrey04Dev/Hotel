const cargarBienvenida = () => {
    let url = '../page/file/bienvenida.txt';
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','archivo.txt',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            console.log(this.responseText);
        }
    }
    // bienvenida.addEventListener('load', cargarBienvenida);
};