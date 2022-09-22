const Imc = (peso: number, altura: number) => (peso / (altura*altura)).toFixed(2)

console.log(Imc(80, 1.8))