// Formulario
let horasDiarias = document.querySelector("#horas-diarias");
let diasTrabalhados = document.querySelector("#dias-trabalhados");
let despesas = document.querySelector("#despesas");
let equipamento = document.querySelector("#equipamento");

// Resultado da Operação
let resultado = document.querySelector("#valor-total");
let hidden = document.querySelector("#resultado");

// Botão
let enviar = document.querySelector("#calcular");

console.log("Tudo certo!")

// Quando o botão for clicado
enviar.addEventListener("click", function(evento) {
    evento.preventDefault() 

    if(horasDiarias.value == "" || diasTrabalhados.value == "" || despesas == "" || equipamento.value == ""){
        alert("Preencha os campos vazios");

    } else {
        // Valor do equipamento pago por mês
        let equipamentoMes = (Number(equipamento.value) / 12);
        // Despesas mensais + equipamento mensal
        let despesasTotais = (Number(despesas.value) + equipamentoMes);
        // Horas trabalhadas por mês
        let horasMes = (Number(horasDiarias.value) * Number(diasTrabalhados.value));
        
        const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2);

        console.log(valorHora)

        hidden.classList.remove("hidden") // Vai remover a classe informada
        resultado.innerText = `R$ ${valorHora}`
    }
});
