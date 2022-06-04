var data = new Date();
var dia = "Sexta-feira";
var hoje = "Sexta-feira"
var nome = "Lucas Lima de Souza"
var idade = 21;
var participantes = 50;
var palestrantes = Array(
    "Lucas",
    "Gustavo",
    "Gabriel",
    "João",
    "Thiago"
)

console.log("Bem vindo ao sistema de cadastro de Eventos");
console.log("Olá " + nome);
console.log("idade: " + idade);

if (hoje == dia) {
    if (idade > 18) {
        if (participantes < 100) {
            console.log("Cadastro permitido, pois a idade é maior que 18 anos");
            console.log("Palestrantes do evento:")
            for (let i = 0; i < palestrantes.length; i++) {
                console.log(palestrantes[i]);
            }
        } else {
            console.log("Cadastro não permitido por ter excedido o limite.")
        }
    } else {
        console.log("Cadastro não permitido, menor de idade");
    }
} else {
    console.log("Cadastro inválido por data inválida")
}


