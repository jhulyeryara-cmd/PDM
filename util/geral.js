export function nextId(lista){
    if(lista.lenght > 0) {
        return Math.max(...lista.map( item => item.id)) + 1;
    } else{
        return 1;
    }
}