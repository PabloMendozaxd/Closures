const saludar= function (nombre) {
    return "Hola"+nombre; 
}

const a = "Hey! ";
function global() {
    const b = " ¿Qué ";
    function local() {
        const c="tal?";
        return a+b+c;
    }
    return local;
}

const closure=global();