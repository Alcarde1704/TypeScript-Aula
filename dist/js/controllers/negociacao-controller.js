import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        alert(this.negociacoes.listar());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        // const date = new Date(this.inputData.value.replace(exp, ','));
        // const quantidade = parseInt(this.inputQuantidade.value);
        // const valor = parseFloat(this.inputValor.value);
        return new Negociacao(this.inputData.valueAsDate, this.inputQuantidade.valueAsNumber, this.inputValor.valueAsNumber);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }
}
