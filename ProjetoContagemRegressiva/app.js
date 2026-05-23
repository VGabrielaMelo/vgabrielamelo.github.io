// Eventos pré-definidos com suas datas
const eventosData = {
    halloween: { mes: 9, dia: 31 }, // Outubro (mes 9)
    natal: { mes: 11, dia: 25 },    // Dezembro (mes 11)
    "ano-novo": { mes: 0, dia: 1 }   // Janeiro (mes 0)
};

// Eventos personalizados adicionados pelo usuário
let eventosPersonalizados = {};

// Carregar eventos salvos do localStorage
const carregarEventosSalvos = () => {
    const salvos = localStorage.getItem("eventosPersonalizados");
    if (salvos) {
        eventosPersonalizados = JSON.parse(salvos);
        // Recriar os cards dos eventos personalizados
        Object.keys(eventosPersonalizados).forEach(id => {
            criarCardEventoPersonalizado(id, eventosPersonalizados[id].nome, eventosPersonalizados[id].data);
        });
    }
};

// Salvar eventos no localStorage
const salvarEventos = () => {
    localStorage.setItem("eventosPersonalizados", JSON.stringify(eventosPersonalizados));
};

// Calcular a data alvo para um evento
const obterProximaData = (mes, dia) => {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const dataEvento = new Date(anoAtual, mes, dia);
    
    if (hoje >= dataEvento) {
        return new Date(anoAtual + 1, mes, dia);
    }
    return dataEvento;
};

// Atualizar a mensagem baseada no tempo restante
const atualizarMensagemEvento = (eventId, dias, horas) => {
    const messageElement = document.querySelector(`[data-message="${eventId}"]`);
    if (!messageElement) return;
    
    const icon = messageElement.querySelector("i");
    const span = messageElement.querySelector("span");
    const card = document.querySelector(`.event-card[data-event-id="${eventId}"]`);
    
    if (dias === 0 && horas === 0) {
        span.textContent = "🎉 HOJE É O DIA! 🎉";
        icon.className = "fas fa-party-horn";
        if (card) card.classList.add("warning");
    } else if (dias === 0) {
        span.textContent = "Está quase lá! Faltam poucas horas...";
        icon.className = "fas fa-clock";
        if (card) card.classList.add("warning");
    } else if (dias <= 3) {
        span.textContent = "A reta final chegou!";
        icon.className = "fas fa-bell";
        if (card) card.classList.add("warning");
    } else {
        span.textContent = `Faltam ${dias} dias para o evento!`;
        icon.className = "fas fa-calendar-check";
        if (card) card.classList.remove("warning");
    }
};

// Atualizar a contagem de um evento específico
const atualizarContagemEvento = (eventId, mes, dia) => {
    const agora = new Date();
    const alvo = obterProximaData(mes, dia);
    const diferenca = alvo.getTime() - agora.getTime();
    
    if (diferenca <= 0) return;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    // Atualizar elementos
    const diasEl = document.querySelector(`[data-days="${eventId}"]`);
    const horasEl = document.querySelector(`[data-hours="${eventId}"]`);
    const minutosEl = document.querySelector(`[data-minutes="${eventId}"]`);
    const segundosEl = document.querySelector(`[data-seconds="${eventId}"]`);
    
    if (diasEl) diasEl.innerHTML = String(dias).padStart(2, '0');
    if (horasEl) horasEl.innerHTML = String(horas).padStart(2, '0');
    if (minutosEl) minutosEl.innerHTML = String(minutos).padStart(2, '0');
    if (segundosEl) segundosEl.innerHTML = String(segundos).padStart(2, '0');
    
    atualizarMensagemEvento(eventId, dias, horas);
};

// Criar card para evento personalizado
const criarCardEventoPersonalizado = (id, nome, dataStr) => {
    const container = document.getElementById("events-container");
    const data = new Date(dataStr);
    const mes = data.getMonth();
    const dia = data.getDate();
    
    const card = document.createElement("div");
    card.className = "event-card";
    card.setAttribute("data-event-id", id);
    card.innerHTML = `
        <div class="event-header">
            <h2><i class="fas fa-calendar-plus"></i> ${nome}</h2>
            <button class="remove-event" data-event="${id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="countdown-grid">
            <div class="time-box">
                <span class="time-value" data-days="${id}">00</span>
                <span class="time-label">Dias</span>
            </div>
            <div class="time-box">
                <span class="time-value" data-hours="${id}">00</span>
                <span class="time-label">Horas</span>
            </div>
            <div class="time-box">
                <span class="time-value" data-minutes="${id}">00</span>
                <span class="time-label">Minutos</span>
            </div>
            <div class="time-box">
                <span class="time-value" data-seconds="${id}">00</span>
                <span class="time-label">Segundos</span>
            </div>
        </div>
        <div class="event-message" data-message="${id}">
            <i class="fas fa-calendar-day"></i>
            <span>Contagem regressiva iniciada!</span>
        </div>
    `;
    
    container.appendChild(card);
    
    // Adicionar evento de remoção
    const removeBtn = card.querySelector(`.remove-event[data-event="${id}"]`);
    removeBtn.addEventListener("click", () => removerEventoPersonalizado(id, card));
};

// Remover evento personalizado
const removerEventoPersonalizado = (id, cardElement) => {
    delete eventosPersonalizados[id];
    salvarEventos();
    cardElement.remove();
};

// Adicionar novo evento
const adicionarEvento = () => {
    const nomeInput = document.getElementById("event-name");
    const dataInput = document.getElementById("event-date");
    const nome = nomeInput.value.trim();
    const data = dataInput.value;
    
    if (!nome || !data) {
        alert("Preencha o nome e a data do evento!");
        return;
    }
    
    const dataEvento = new Date(data);
    const hoje = new Date();
    if (dataEvento <= hoje) {
        alert("A data precisa ser futura!");
        return;
    }
    
    const id = `custom_${Date.now()}`;
    eventosPersonalizados[id] = {
        nome: nome,
        data: data
    };
    
    salvarEventos();
    criarCardEventoPersonalizado(id, nome, data);
    
    // Limpar inputs
    nomeInput.value = "";
    dataInput.value = "";
};

// Atualizar todos os eventos
const atualizarTodosEventos = () => {
    // Eventos pré-definidos
    Object.keys(eventosData).forEach(eventId => {
        const { mes, dia } = eventosData[eventId];
        atualizarContagemEvento(eventId, mes, dia);
    });
    
    // Eventos personalizados
    Object.keys(eventosPersonalizados).forEach(eventId => {
        const data = new Date(eventosPersonalizados[eventId].data);
        const mes = data.getMonth();
        const dia = data.getDate();
        atualizarContagemEvento(eventId, mes, dia);
    });
};

// Inicialização
const init = () => {
    carregarEventosSalvos();
    atualizarTodosEventos();
    setInterval(atualizarTodosEventos, 1000);
    
    // Adicionar listener para o botão de adicionar evento
    const addBtn = document.getElementById("add-event-btn");
    addBtn.addEventListener("click", adicionarEvento);
    
    // Adicionar listeners para remoção de eventos pré-definidos
    document.querySelectorAll(".remove-event[data-event]").forEach(btn => {
        const eventId = btn.getAttribute("data-event");
        if (eventosData[eventId]) {
            btn.addEventListener("click", () => {
                alert("Eventos pré-definidos não podem ser removidos, apenas personalizados.");
            });
        }
    });
};

init();
