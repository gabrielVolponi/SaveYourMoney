function calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const horas = parseFloat(document.getElementById('horas').value);

    if (!salario || !horas) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    if (salario <= 0 || horas <= 0) {
        alert('Os valores precisam ser maiores que zero!');
        return;
    }

    // Calcula valor por hora
    const valorPorHora = salario / horas;

    // Calcula economia mensal e anual para diferentes percentuais
    const economias = {
        conservadora: {
            percentual: 25,
            mensal: salario * 0.25,
            anual: salario * 0.25 * 12
        },
        moderada: {
            percentual: 30,
            mensal: salario * 0.30,
            anual: salario * 0.30 * 12
        },
        agressiva: {
            percentual: 50,
            mensal: salario * 0.50,
            anual: salario * 0.50 * 12
        }
    };

    // Função para formatar valores monetários
    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    // Atualiza valor por hora
    const elementoValorHora = document.getElementById('valorHora');
    elementoValorHora.textContent = formatarMoeda(valorPorHora);

    // Atualiza os resultados de economia
    Object.entries(economias).forEach(([tipo, dados]) => {
        const elementoMensal = document.getElementById(`${tipo}Mensal`);
        const elementoAnual = document.getElementById(`${tipo}Anual`);

        elementoMensal.textContent = formatarMoeda(dados.mensal);
        elementoAnual.textContent = formatarMoeda(dados.anual);

        // Adiciona animação
        [elementoMensal, elementoAnual].forEach(elemento => {
            elemento.style.opacity = '0';
            setTimeout(() => {
                elemento.style.transition = 'opacity 0.5s';
                elemento.style.opacity = '1';
            }, 100);
        });
    });
}

function calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const horas = parseFloat(document.getElementById('horas').value);

    if (!salario || !horas) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    if (salario <= 0 || horas <= 0) {
        alert('Os valores precisam ser maiores que zero!');
        return;
    }

    // Calcula valor por hora
    const valorPorHora = salario / horas;

    // Calcula economia anual para diferentes percentuais
    const economiaAnual25 = salario * 0.25 * 12;
    const economiaAnual30 = salario * 0.30 * 12;
    const economiaAnual50 = salario * 0.50 * 12;

    // Função para formatar valores monetários
    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    // Atualiza os resultados na tela com animação
    const elementos = {
        'valorHora': valorPorHora,
        'economia25': economiaAnual25,
        'economia30': economiaAnual30,
        'economia50': economiaAnual50
    };

    for (const [id, valor] of Object.entries(elementos)) {
        const elemento = document.getElementById(id);
        elemento.textContent = formatarMoeda(valor);
        elemento.style.opacity = '0';
        setTimeout(() => {
            elemento.style.transition = 'opacity 0.5s';
            elemento.style.opacity = '1';
        }, 100);
    }
}

// Adiciona evento de tecla Enter para calcular
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcular();
    }
});
// Add these new functionsnav a[href="#"]ur existing script.js

document.querySelector('#contato').addEventListener('click', function(e) {
    e.preventDefault();
    toggleContactModal();
});

function toggleContactModal() {
    const modal = document.getElementById('contactModal');
    const currentDisplay = modal.classList.contains('hidden');
    
    if (currentDisplay) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const sugestao = document.getElementById('sugestao').value;
    
    // Criar o link mailto
    const mailtoLink = `mailto:gabrielvolponi11@gmail.com?subject=Contato da Calculadora Financeira&body=Nome: ${nome}%0D%0AEmail: ${email}%0D%0ASugestão: ${sugestao}`;
    
    // Abrir o cliente de email padrão
    window.location.href = mailtoLink;
    
    // Limpar o formulário
    event.target.reset();
    
    // Fechar o modal
    toggleContactModal();
    
    // Mostrar mensagem de sucesso
    alert('Obrigado pelo contato! Seu email será aberto para envio.');
}

// Fechar modal ao clicar fora
document.getElementById('contactModal').addEventListener('click', function(e) {
    if (e.target === this) {
        toggleContactModal();
    }
});
document.querySelector('#sobre').addEventListener('click', function(e) {
    e.preventDefault();
    toggleSideMenu();
});

function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const currentWidth = sideMenu.style.width;

    if (currentWidth === '400px') {
        sideMenu.style.width = '0';
        document.body.style.overflow = 'auto';
    } else {
        sideMenu.style.width = '400px';
        document.body.style.overflow = 'hidden';
    }
}

document.addEventListener('click', function(e) {
    const sideMenu = document.getElementById('sideMenu');
    const navLink = document.querySelector('#sobre');

    if (!sideMenu.contains(e.target) && e.target !== navLink) {
        sideMenu.style.width = '0';
        document.body.style.overflow = 'auto';
    }
});
function calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const horas = parseFloat(document.getElementById('horas').value);

    if (!salario || !horas) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    if (salario <= 0 || horas <= 0) {
        alert('Os valores precisam ser maiores que zero!');
        return;
    }

    // Calcula valor por hora
    const valorPorHora = salario / horas;

    // Calcula economia mensal e anual para diferentes percentuais
    const economias = {
        conservadora: {
            percentual: 25,
            mensal: salario * 0.25,
            anual: salario * 0.25 * 12
        },
        moderada: {
            percentual: 30,
            mensal: salario * 0.30,
            anual: salario * 0.30 * 12
        },
        agressiva: {
            percentual: 50,
            mensal: salario * 0.50,
            anual: salario * 0.50 * 12
        }
    };

    // Função para formatar valores monetários
    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    // Atualiza valor por hora
    const elementoValorHora = document.getElementById('valorHora');
    elementoValorHora.textContent = formatarMoeda(valorPorHora);
    
    // Atualiza os resultados de economia
    Object.entries(economias).forEach(([tipo, dados]) => {
        const elementoMensal = document.getElementById(`${tipo}Mensal`);
        const elementoAnual = document.getElementById(`${tipo}Anual`);
        
        elementoMensal.textContent = formatarMoeda(dados.mensal);
        elementoAnual.textContent = formatarMoeda(dados.anual);
        
        // Adiciona animação
        [elementoMensal, elementoAnual].forEach(elemento => {
            elemento.style.opacity = '0';
            setTimeout(() => {
                elemento.style.transition = 'opacity 0.5s';
                elemento.style.opacity = '1';
            }, 100);
        });
    });
}

// ... resto do código permanece o mesmo