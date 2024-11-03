function calcularFibo(n) {
    let fibo; // Declarar la variable

    if (n === 0) {
        fibo = [0];
    } else if (n === 1) {
        fibo = [0, 1];
    } else {
        fibo = [0, 1]; // Inicializar el arreglo con los dos primeros números
        for (let i = 2; i <= n; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
    }
    
    return fibo;
}

console.log(calcularFibo(9));
