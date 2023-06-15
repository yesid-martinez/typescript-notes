export class Training {
    constructor(
      public type: string,
      readonly distance: number,
      public date: string,
      private comments: string = ""
    ) {}
}

// Modificadores de acceso

// `public` => Indica que las propiedades son accesibles desde cualquier parte del programa.
// `readonly` => Indica que una propiedad solo puede ser leída, pero no modificada.
// "private" => Indica que la propiedad solo es accesible desde dentro de la propia clase.