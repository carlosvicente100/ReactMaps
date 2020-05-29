# ReactMaps
React with API Google Maps

## Installation

```bash
npm init 
```

## Usage

- launch app:
```bash
npm run start
```

- build the app 

```bash
npm run prod 
```
- runs cypress for test e2e (needs launch start before)

```bash
npm run test 
```


## Resumen

He creado varios componentes (point y textInput) que se llaman desde el componente map.js.

TextInput incluye el buscador de situaciones con las sugerencias con estilos custom, al seleccionar uno, se comunica al map.js que setea en redux un nuevo punto

En el componente Map se llama al componente Point por cada marcador existente en redux, de manera que queda aislado del componente textInput

## Ejercicio teórico
la solución se encuentra en el fichero [firstTest.js](https://github.com/carlosvicente100/ReactMaps/blob/master/firstTest.js)



## License
[MIT](https://choosealicense.com/licenses/mit/)