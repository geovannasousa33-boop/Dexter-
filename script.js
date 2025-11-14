// Classe Criminal
class Criminal {
    constructor(nome, crime) {
        this.nome = nome;
        this.crime = crime;
        this.condenado = false; // Inicia como não condenado
    }

    escaparDaJustica() {
        this.condenado = false;
    }

    serCondenado() {
        this.condenado = true;
    }
}

// Classe Dexter
class Dexter {
    constructor() {
        this.nome = "Dexter Morgan";
    }

    caçar(criminal) {
        if (!criminal.condenado) {
            return `${this.nome} está caçando ${criminal.nome}. Criminoso eliminado!`;
        } else {
            return `${this.nome} não caçou ${criminal.nome}, ele foi condenado.`;
        }
    }
}

// Seleção dos elementos DOM
const adicionarCriminalButton = document.getElementById('adicionar-criminal');
const eliminarCriminalButton = document.getElementById('eliminar-criminal');
const nomeInput = document.getElementById('nome-criminal');
const crimeInput = document.getElementById('crime');
const statusElement = document.getElementById('status');
const criminalInfo = document.getElementById('criminal-info');
const mensagem = document.getElementById('mensagem');

let criminalAtual = null;
let dexter = new Dexter();

// Função para adicionar um criminoso
adicionarCriminalButton.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    const crime = crimeInput.value.trim();

    if (nome && crime) {
        criminalAtual = new Criminal(nome, crime);
        criminalInfo.style.display = 'block';
        statusElement.textContent = `${nome} cometeu ${crime}. Status: Escapou da justiça!`;

        nomeInput.value = '';
        crimeInput.value = '';
        mensagem.textContent = '';
    } else {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
    }
});

// Função para eliminar um criminoso
eliminarCriminalButton.addEventListener('click', () => {
    if (criminalAtual) {
        const resultado = dexter.caçar(criminalAtual);
        statusElement.textContent = resultado;

        // Se o criminoso escapou, ele é eliminado
        if (!criminalAtual.condenado) {
            criminalAtual.serCondenado();
        }
    }
});
