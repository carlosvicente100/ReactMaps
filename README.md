# ReactMaps
React with API Google Maps

npm init - install all

npm start - runs the app 

npx cypress open - runs cypress for test


Solución:
He creado varios componentes (point y textInput) que se llaman desde el componente map.js.

TextInput incluye el buscador de situaciones con las sugerencias con estilos custom, al seleccionar uno, se comunica al map.js que setea en redux un nuevo punto

En el componente Map se llama al componente Point por cada marcador existente en redux, de manera que queda aislado del componente textInput 

