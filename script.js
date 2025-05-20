let min=1;
let max=10;
   let numero= Math.floor(Math.random()* (max - min) + min);  
    
        console.log(choixDuNombre);
 for (let index = 0; index < 3; index++)    {
    let choixDuNombre= prompt("choisi un numero");
    if (numero==choixDuNombre)              {
         console.log("tu as réussi");
         window.alert("bravo tu as reussi");
        break;                          }
    else                                    {
        console.log("Vous vous etes trompé, recommence");
                                            }
}




