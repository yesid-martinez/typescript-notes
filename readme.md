# Repositorio de apuntes de TypeScript

Este repositorio es una colección de apuntes de TypeScript, donde guardo mis notas sobre el lenguaje de programación y conceptos relacionados. Aquí encontrarás información útil y organizada para aprender y repasar TypeScript.

# Funcionamiento

Para que cada archivo TypeScript funcione correctamente, es necesario asegurarse de conectar su archivo JavaScript correspondiente en el archivo HTML principal `index.html`

- <script src="dist/js/archivo.js"></script>

En consola: `tsc -w` Detecta los cambios en los archivos TypeScript y transpila a archivos JavaScript automaticamente.


## Módulos

Para habilitar el uso de módulos en TypeScript, es necesario incluir el atributo type="module" en la etiqueta <script>.

Adicionalmente, será necesario modificar la configuración en `tsconfig.json` para un correcto funcionamiento.

## tsconfig.json

En consola: `tsc --init` Genera archivo tsconfig.json

Configuraciones:
- `"module": "ES6"`
- `"rootDir": "./src/ts"`
- `"outDir": "./dist/js"`


### Cómo colaborar

¡Tu colaboración es bienvenida! Si deseas contribuir a este repositorio, simplemente realiza un pull request con tus cambios propuestos. Agradezco cualquier contribución para mejorar este repositorio.

## Contacto

Si tienes alguna pregunta o sugerencia relacionada con mis apuntes, puedes contactarme a través de mi correo electrónico: [wujibifan.hh@gmail.com](mailto:wujibifan.hh@gmail.com)
