// Elementos do DOM
const horasDiarias = document.querySelector("#horas-diarias");
const diasTrabalhados = document.querySelector("#dias-trabalhados");
const despesas = document.querySelector("#despesas");
const equipamento = document.querySelector("#equipamento");
const resultadoSpan = document.querySelector("#valor-total");
const resultadoMensalSpan = document.querySelector("#valor-mensal");
const resultadoDiv = document.querySelector("#resultado");
const form = document.querySelector("#form");

console.log("Calculadora CLT → PJ carregada!");

// Evento de submit
form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Validação dos campos
    if (!horasDiarias.value || !diasTrabalhados.value || !despesas.value || !equipamento.value) {
        alert("❌ Preencha todos os campos antes de calcular.");
        return;
    }

    // Conversão para número
    const horasPorDia = Number(horasDiarias.value);
    const diasPorMes = Number(diasTrabalhados.value);
    const despesasMensais = Number(despesas.value);
    const valorEquipamento = Number(equipamento.value);

    // Validação básica de valores positivos
    if (horasPorDia <= 0 || diasPorMes <= 0 || despesasMensais < 0 || valorEquipamento < 0) {
        alert("⚠️ Os valores devem ser positivos (exceto despesas, que podem ser zero).");
        return;
    }

    // Cálculos
    const equipamentoPorMes = valorEquipamento / 12;
    const despesasTotais = despesasMensais + equipamentoPorMes;
    const horasPorMes = horasPorDia * diasPorMes;

    // Fórmula original: valorHora = (despesasTotais / horasMes) / 0.5
    const valorHora = (despesasTotais / horasPorMes) * 2;
    const valorFormatado = valorHora.toFixed(2);

    // Calcular valor mensal (receita bruta)
    const valorMensal = valorHora * horasPorMes;
    const valorMensalFormatado = valorMensal.toFixed(2);

    // Exibir resultados
    resultadoSpan.innerText = `R$ ${valorFormatado.replace('.', ',')}`;
    resultadoMensalSpan.innerText = `R$ ${valorMensalFormatado.replace('.', ',')}`;
    resultadoDiv.classList.remove("hidden");

    console.log(`Resultado: R$ ${valorFormatado} por hora | R$ ${valorMensalFormatado} por mês`);
});
