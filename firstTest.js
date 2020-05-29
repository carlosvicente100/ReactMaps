const STREAM_SERVICE = 'StreamigService',
  DOWNLOAD_SERVICE = 'DownloadService'

class RegisteredUser {
  constructor(services = []) {
    this.services = services.getMultimediaContent()
  }
  getTotal() {
    const promises = services.map((service) => {
      return service
    });
     return Promise.all(promises).then((services) =>  services.reduce((previous,current) => {
        switch (current.type) {
          case STREAM_SERVICE:
            previous+= current.streamingPrice +current.premiumContent
            break;
          case DOWNLOAD_SERVICE:
            previous+= current.downloadPrice +current.premiumContent
            break;
          default:
            break
              }
      return previous;
      },0)).then(ret_val => console.log('respuesta',ret_val))
            }

        }
/*Problemas 
1.- complejidad para diferenciar tipo de servicio 
2.- la posibilidad de reducir un condicional reduciendo así el tiempo de respuesta 
3.- que la llamada getMultimediaContent tarde en contestar con la información del servicio y no contabilice bien el precio, además de no ser una constante
4.- el control de tipo de servicio con if con doble equal 

/* Soluciones
1.- añadir un atributo 'type' en MultimediaContent para facilitar las consultas 
2.- unificar la tabla de PremiumContent con MultimediaContent añadiendo el atributo de aditionalFee por defecto con valor Float de 0.00
3.- reemplazar forEach por un map como promesa para asegurar tener toda la información a la hora de trabajar con ella
4.- reemplazar el 'if' por 'switch' para controlar de manera mas ordenada y escalable los distintos casos asegurando con constantes y no con "=="
*/
