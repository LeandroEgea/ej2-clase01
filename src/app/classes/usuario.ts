export class Usuario {
  private _nombre: string;
  private _clave: string;

  public constructor(nombre: string, clave: string) {
    this._nombre = nombre;
    this._clave = clave;
  }

  public get nombre(): string {
    return this._nombre;
  }
}
