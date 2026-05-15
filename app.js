function verificarPrimo() {
    let n = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    let base = "text-center text-lg font-semibold p-4 min-h-[60px] flex items-center justify-center rounded-2xl border";

    if (isNaN(n) || n < 2 || n > 100) {
        resultado.className = base + " text-yellow-700 text-red-700  bg-yellow-100 border-yellow-300";
        resultado.textContent = "Introduce un número válido entre 2 y 100";
        return;
    }

    let divisor = null;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            divisor = i;
            break;
        }
    }

    if (divisor) {
        resultado.textContent = `El número ${n} no es primo. Es divisible por ${divisor}.`;
        resultado.className = base + " text-red-700 bg-red-100 border-red-300";
    } else {
        resultado.textContent = `El número ${n} es primo. No tiene divisores.`;
        resultado.className = base + " text-green-700 bg-green-100 border-green-300";
    }
}