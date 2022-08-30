import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  listar(): readonly Negociacao[] {
    return this._negociacoes;
  }
}








