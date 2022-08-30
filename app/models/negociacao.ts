export class Negociacao {

  // usando readonly para que os atributos nunca sejam modificados
  // possu usar private mas ai teria que ter o getter, com o public e readonly 
  //pode ser acessado por todos mas nunca modificado após instancia
  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ){}

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data;
  }

  // get quantidade(): number{
  //   return this._quantidade;
  // }

  
  // get valor(): number{
  //   return this._valor;
  // }

  get volume(): number{
    return this.quantidade * this.valor;
  }




}