function contarNumero(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
        
    }
    
}


console.time("duracion");
contarNumero(10);
console.timeEnd("duracion");


/*let inicio_tiempo = performance.now();
contarNumero(5);
let final_tiempo = performance.now();
let duracion = final_tiempo - inicio_tiempo;

console.log(`El algoritmo de contar ha durado ${duracion}.ms`);*/
