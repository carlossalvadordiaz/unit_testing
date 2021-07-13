// Nombres significativos. camelCase

console.log('hola');
// Utilizar objetos

let miObject = {
    miVar: 589123, //declarar las variables dentro del objeto para protegerlas.
    mimethod() {
        return console.log('mimethod');
    }
}

miObject.mimethod();

// Utiliza funciones

let pruebaDesdeOverride = 'adhjasdjkl'

function changeState(newState) {
    this.state = newState;
}




// Utiliza constantes

changeState("active"); // xxxx

const STATE_ACTIVE = "active"
changeState(STATE_ACTIVE) /// vvv


class MyClass{
    constructor(model) {
        this.model = model
    }
};

//Mostrar errores con console log
let colores = "background: purple; color: white; display block";
//string de atributos 
console.log('%c La petición falló', colores, new Error('Custom error msg')); // %c -> definir colores
console.assert(true === false);
console.error('Se ha producido un error');

console.group();
console.log('nivel 1');
console.group();
console.log('nivel 2')
console.groupEnd();

class peopleGroups {
        
    highSchoolPartners = ['Rodolfo', 'Langosta', 'Zacarías']
}

const highS = new peopleGroups();

console.table(highS.highSchoolPartners);
