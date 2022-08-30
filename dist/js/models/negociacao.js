export class Negociacao {
    // usando readonly para que os atributos nunca sejam modificados
    // possu usar private mas ai teria que ter o getter, com o public e readonly 
    //pode ser acessado por todos mas nunca modificado após instancia
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    // get quantidade(): number{
    //   return this._quantidade;
    // }
    // get valor(): number{
    //   return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
}
