let saida = "";
let lista1 = [8,10,1,0,15,7,9,14,20,2,4,3];
const ordenaBublle = () =>{
   
    let trocar = true;
    console.log(lista);
    while(trocar ){
        trocar = false;
        let temporaria
        for(let i = 0; i < lista.length; i++){
            if(lista[i] > lista[i+1]){
                temporaria = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = temporaria;
                trocar = true;
                mostrar();
            }
        }
    }
}
const mostrar = () =>{
    saida = "";
    for(let i=0; i<lista.length - 1; i++){
        saida+= lista[i]
    }
}
(()=>{   

    for(let i=0; i<lista1.length - 1; i++){
        saida += lista1[i] + " - ";
    }
    saida += lista[lista.length-1];
    console.log(saida);
    document.getElementById("bubble") .innerHTML = saida;
})();